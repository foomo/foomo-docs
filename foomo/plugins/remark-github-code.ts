import type { Root, Code } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

interface CodeNode extends Code {
  meta?: string | null;
}

const TITLE_URL_SEPARATOR = "|||";

/**
 * Remark plugin that fetches GitHub code references at build time.
 *
 * Replaces code blocks with `reference` in their meta (e.g. ```go reference title="..."``)
 * by fetching the file content from GitHub and inlining it.
 * Adds line numbers matching the original source and links the title to the GitHub file.
 */
const remarkGithubCode: Plugin<[], Root> = () => {
  return async (tree: Root) => {
    const promises: Promise<void>[] = [];

    visit(tree, "code", (node: CodeNode) => {
      if (!node.meta || !node.meta.includes("reference")) {
        return;
      }

      const url = (node.value || "").trim();
      if (!url.startsWith("https://github.com/")) {
        return;
      }

      const promise = (async () => {
        try {
          // Parse GitHub URL into raw URL
          // e.g. https://github.com/user/repo/blob/branch/path/file.go#L10-L20
          const hashIndex = url.indexOf("#");
          const baseUrl = hashIndex !== -1 ? url.substring(0, hashIndex) : url;
          const fragment = hashIndex !== -1 ? url.substring(hashIndex + 1) : "";

          const rawUrl = baseUrl
            .replace("https://github.com/", "https://raw.githubusercontent.com/")
            .replace("/blob/", "/");

          const response = await fetch(rawUrl);
          if (!response.ok) {
            console.warn(
              `[remark-github-code] Failed to fetch ${url}: ${response.status} ${response.statusText}`
            );
            node.value = `// Error: failed to fetch ${url} (${response.status})`;
            return;
          }

          let content = await response.text();

          // Extract line range if specified
          let startLine: number | null = null;
          if (fragment) {
            const lines = content.split("\n");
            const rangeMatch = fragment.match(/^L(\d+)(?:-L(\d+))?$/);
            if (rangeMatch) {
              startLine = parseInt(rangeMatch[1], 10);
              const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : startLine;
              content = lines.slice(startLine - 1, end).join("\n");
            }
          }

          // Strip common leading whitespace (dedent)
          const nonEmptyLines = content.split("\n").filter((line) => line.trim().length > 0);
          if (nonEmptyLines.length > 0) {
            const minIndent = Math.min(
              ...nonEmptyLines.map((line) => {
                const match = line.match(/^(\s*)/);
                return match ? match[1].length : 0;
              })
            );
            if (minIndent > 0) {
              content = content
                .split("\n")
                .map((line) => line.substring(Math.min(minIndent, line.length)))
                .join("\n");
            }
          }

          // Trim trailing whitespace
          content = content.replace(/\s+$/, "");

          node.value = content;

          // Remove "reference" from meta so Docusaurus renders it as a normal code block
          if (node.meta) {
            node.meta = node.meta
              .replace(/\s*reference\s*/, " ")
              .trim();
          }

          // Add showLineNumbers to meta
          const showLineNumbers = startLine
            ? `showLineNumbers=${startLine}`
            : "showLineNumbers";
          node.meta = node.meta ? `${node.meta} ${showLineNumbers}` : showLineNumbers;

          // Encode GitHub URL into the title so the swizzled Title component can link it
          // Format: "title text|||https://github.com/..."
          const titleMatch = node.meta.match(/title="([^"]*)"/);
          if (titleMatch) {
            const originalTitle = titleMatch[1];
            node.meta = node.meta.replace(
              `title="${originalTitle}"`,
              `title="${originalTitle}${TITLE_URL_SEPARATOR}${url}"`
            );
          } else {
            // No title — use the filename from the URL
            const filename = baseUrl.split("/").pop() || "source";
            node.meta = `${node.meta} title="${filename}${TITLE_URL_SEPARATOR}${url}"`;
          }
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          console.warn(`[remark-github-code] Error fetching ${url}: ${message}`);
          node.value = `// Error: failed to fetch ${url}`;
        }
      })();

      promises.push(promise);
    });

    await Promise.all(promises);
  };
};

export default remarkGithubCode;
