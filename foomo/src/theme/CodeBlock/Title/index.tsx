import React from "react";
import type { Props } from "@theme/CodeBlock/Title";

const SEPARATOR = "|||";

export default function CodeBlockTitle({ children }: Props): React.ReactNode {
  if (typeof children === "string" && children.includes(SEPARATOR)) {
    const [title, url] = children.split(SEPARATOR, 2);
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-code-title-link"
      >
        {title}
      </a>
    );
  }
  return children;
}
