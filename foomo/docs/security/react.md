---
title: React & Next.js Security
slug: /security/react
authors: [gemini]
---

# React & Next.js Security

Securing React applications involves understanding common vulnerabilities and leveraging the framework's features, as well as best practices for the ecosystem. This guide covers general React security and then dives into specifics for Next.js.

## Table of Contents

- [General React Security](#general-react-security)
  - [Cross-Site Scripting (XSS)](#cross-site-scripting-xss)
  - [Third-Party Package Vulnerabilities](#third-party-package-vulnerabilities)
  - [API Security](#api-security)
  - [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
  - [Cross-Site Request Forgery (CSRF)](#cross-site-request-forgery-csrf)
  - [Other Vulnerabilities](#other-vulnerabilities)
- [Next.js Security](#nextjs-security)
  - [Data Security](#data-security)
  - [Authentication](#authentication)
  - [Server Actions](#server-actions)
- [Sources](#sources)
- [Security Checklist](#security-checklist)
  - [1. Package Manager](#1-package-manager)
  - [2. Dependencies](#2-dependencies)
  - [3. Data Validation and Sanitization](#3-data-validation-and-sanitization)
  - [4. Avoiding Code Exposure](#4-avoiding-code-exposure)
  - [5. Centralize Security Functions](#5-centralize-security-functions)
  - [6. Security Headers](#6-security-headers)
  - [7. Code Editor](#7-code-editor)
  - [8. Rate Limiting and Security Audits](#8-rate-limiting-and-security-audits)
  - [9. Third-Party Security Scanners](#9-third-party-security-scanners)

## General React Security

### Cross-Site Scripting (XSS)

React helps mitigate XSS attacks by automatically escaping content rendered in JSX. However, there are still ways vulnerabilities can be introduced, especially with DOM-based XSS where malicious code is injected through user input.

-   **`dangerouslySetInnerHTML`**: This prop should be avoided as it bypasses React's protection. If you must use it, ensure the HTML content is sanitized.

    *Vulnerable Example:*
    ```jsx
    import React from 'react';

    function VulnerableComponent({ userInput }) {
      return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
    }

    // Malicious input:
    // const maliciousInput = '<img src=x onerror="alert(\'XSS Attack!\')" />';
    // <VulnerableComponent userInput={maliciousInput} />
    ```

    *Secure Example (with DOMPurify):*
    ```jsx
    import React from 'react';
    import DOMPurify from 'dompurify';

    function SafeComponent({ userInput }) {
      const sanitizedHTML = DOMPurify.sanitize(userInput);
      return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
    }

    // Malicious input is now sanitized and the script will not execute.
    // const maliciousInput = '<img src=x onerror="alert(\'XSS Attack!\')" />';
    // <SafeComponent userInput={maliciousInput} />
    ```

-   **Direct DOM Access**: Using `refs` to directly manipulate the DOM with `innerHTML` can bypass React's security mechanisms.

    *Vulnerable Example:*
    ```jsx
    import React, { useEffect, useRef } from 'react';

    function VulnerableDOMComponent({ htmlContent }) {
      const divRef = useRef(null);

      useEffect(() => {
        if (divRef.current) {
          divRef.current.innerHTML = htmlContent;
        }
      }, [htmlContent]);

      return <div ref={divRef} />;
    }

    // Malicious input:
    // const maliciousInput = '<img src=x onerror="alert(\'XSS with refs!\')" />';
    // <VulnerableDOMComponent htmlContent={maliciousInput} />
    ```
    To fix this, avoid using `innerHTML` and use declarative React rendering. If you must insert HTML, use `dangerouslySetInnerHTML` with a sanitization library like `DOMPurify`.

-   **URL Schemes**: Dynamic URLs in `href` attributes can be exploited with `javascript:` schemes.

    *Vulnerable Example:*
    ```jsx
    import React from 'react';

    function VulnerableLink({ userUrl, linkText }) {
      return <a href={userUrl}>{linkText}</a>;
    }

    // Malicious URL:
    // const maliciousUrl = 'javascript:alert("XSS via URL!")';
    // <VulnerableLink userUrl={maliciousUrl} linkText="Click me" />
    ```
    *Secure Example:*
    Validate and sanitize all URLs to ensure they use safe protocols like `http:` or `https:`.

    ```jsx
    import React from 'react';

    function SafeLink({ userUrl, linkText }) {
      const sanitizedUrl = userUrl.startsWith('javascript:') ? '#' : userUrl;
      // For a robust solution, use a library to validate the URL protocol.
      return <a href={sanitizedUrl}>{linkText}</a>;
    }
    ```

### Third-Party Package Vulnerabilities

Modern applications rely heavily on third-party packages.

-   **Audit Dependencies**: Regularly run `npm audit` or `yarn audit` to identify and fix known vulnerabilities in your dependencies.
    ```bash
    npm audit
    # or
    yarn audit
    ```
-   **Keep Packages Updated**: Use tools like Dependabot to automatically create pull requests for dependency updates.
-   **Reduce Dependency Footprint**: Each dependency increases the attack surface. Before adding a new package, consider if the functionality can be achieved with native JavaScript/browser APIs. Modern JavaScript has many built-in capabilities that previously required external libraries.

### API Security

-   **Authentication & Authorization**: Implement robust authentication and authorization on your backend APIs.
-   **SQL Injection (SQLi)**: While SQLi is a backend vulnerability, the frontend plays a role in how data is sent to the API. Ensure that your frontend code does not encourage or enable SQLi attacks. For example, avoid constructing SQL-like queries on the client side. Always rely on the backend to properly sanitize and parameterize all incoming data before it's used in database queries.
-   **Environment Variables**: Never hardcode API keys or other secrets in your frontend code. Use environment variables (e.g., `.env.local`) and prefix them with `NEXT_PUBLIC_` in Next.js if they need to be exposed to the browser. Keys without the prefix are only available on the server-side.

    In `.env.local`:
    ```env
    API_KEY=secret_value
    NEXT_PUBLIC_ANALYTICS_ID=public_value
    ```

    In a server-side file (like a Server Component or Route Handler):
    ```javascript
    const apiKey = process.env.API_KEY; // "secret_value"
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID; // "public_value"
    ```
    In a client-side file (like a Client Component):
    ```javascript
    // const apiKey = process.env.API_KEY; // undefined
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID; // "public_value"
    ```

#### Advanced Secrets Management
Storing secrets in plaintext `.env` files poses a security risk. If an attacker gains access to your environment through a supply chain attack or other means, they can easily exfiltrate these secrets. A more secure approach is to use a secrets management solution.

These tools store only references in your `.env` file, and the actual secret values are fetched just-in-time, often requiring additional authentication (like Touch ID).

*Example with references:*
```env
DATABASE_PASSWORD=op://vault/database/password
API_KEY=infisical://project/env/api-key
```

You would then use the secret manager's CLI to inject the secrets into your application's environment at runtime.

*Example of running an application:*
```bash
# Using 1Password CLI
op run -- npm start

# Using Infisical CLI
infisical run -- npm start
```

### Server-Side Rendering (SSR)

When using SSR, ensure that any data included in the initial server-rendered page is properly sanitized, especially if it includes user-generated content. This prevents XSS during the client-side hydration phase.

### Cross-Site Request Forgery (CSRF)

A CSRF attack tricks a victim into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on their behalf. For instance, a CSRF attack could force a user to transfer funds or change their email address without their knowledge.

To prevent CSRF, you should use anti-CSRF tokens. These are unique, secret, and unpredictable values generated by the server and sent to the client. The client includes this token in subsequent requests. The server validates the token before processing the request.

Many modern authentication patterns, such as those using JWTs (JSON Web Tokens) stored in `localStorage`, are inherently stateless and may not be as vulnerable to traditional CSRF attacks that rely on session cookies. However, if you are using session-based authentication, especially with cookies, implementing anti-CSRF tokens is crucial. Setting the `SameSite` attribute on your cookies (e.g., `SameSite=Strict` or `SameSite=Lax`) also provides a strong layer of defense.

### Other Vulnerabilities

-   **Zip Slip**: This vulnerability occurs when handling zip files. An attacker can craft a malicious archive that, when extracted, overwrites files in the filesystem. If your application handles file uploads, particularly archives, use a library that is not vulnerable to path traversal to extract files.

-   **Broken Authentication**: This is a broad category of vulnerabilities that can occur when authentication and session management are not handled correctly. Common issues include weak passwords, session tokens being exposed in URLs, and improper invalidation of sessions after logout. Always use secure, well-vetted authentication libraries and follow best practices for session management.

-   **Distributed Denial of Service (DDoS)**: While primarily a backend and infrastructure concern, your frontend application can be a target. DDoS attacks aim to make your application unavailable to users by overwhelming it with traffic. Implementing rate limiting on your APIs and using services that provide DDoS protection are common mitigation strategies.
-   **Clickjacking**: This attack tricks a user into clicking something different from what they perceive, potentially revealing confidential information or taking control of their computer while clicking on seemingly innocuous objects, including web pages. To prevent this, you can use the `X-Frame-Options` HTTP header.

## Component-Specific Security

### Prop Validation
Always validate the props passed to your components, especially if they receive data from an API or user input. While `PropTypes` can be useful in development for checking data types, a more robust solution for validation is to use a library like Zod. This is especially important in Server Actions or API routes where you need to be certain about the shape and content of the data.

*Example of Zod validation in a Server Action:*
```typescript
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function updateUser(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!parsed.success) {
    // Handle validation error
    return { error: parsed.error.format() };
  }

  // ... proceed with valid data ...
}
```

### Securing Third-Party Components
Be cautious when using third-party components, as they can introduce security vulnerabilities.
- **Vet the library**: Choose popular, well-maintained libraries with a good security track record.
- **Isolate and sandbox**: If you need to render a third-party component that you don't fully trust, consider rendering it in an `iframe` with the `sandbox` attribute to limit its capabilities.
- **Control props**: Be careful about the data you pass to third-party components. Avoid passing down sensitive information if it's not strictly necessary.

## Next.js Security

Next.js introduces its own security considerations, especially with the introduction of Server Components and Server Actions.

### Data Security

Next.js provides mechanisms to prevent sensitive data from being leaked to the client.

-   **Server Components**: By default, components in the `app` directory are Server Components. They run only on the server, so sensitive logic and data fetching can be kept out of the client-side bundle.
-   **`server-only` and `client-only` packages**: You can use these packages to ensure that a module is only ever imported into a Server or Client Component, respectively. This prevents accidentally including server-side code on the client.
    ```javascript
    import 'server-only';

    export async function getDataFromDatabase() {
      // This function can only be imported in Server Components.
      // Attempting to import it in a Client Component will result in a build error.
    }
    ```
-   **Data Tainting**: Next.js has experimental support for tainting objects to prevent them from being passed from the server to the client. This can be used to protect sensitive data.

### Authentication

Next.js provides a comprehensive guide on authentication.

-   **Middleware**: Use Middleware to protect routes by running code before a request is completed. You can check for a valid session and redirect unauthenticated users.

    Example `middleware.ts`:
    ```typescript
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export function middleware(request: NextRequest) {
      const sessionCookie = request.cookies.get('session');

      if (!sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    }

    export const config = {
      matcher: '/dashboard/:path*',
    };
    ```

-   **Data Access Layer (DAL)**: Centralize data fetching logic in a DAL. This allows you to consistently apply authentication and authorization checks before accessing or modifying data.
-   **Data Transfer Objects (DTOs)**: Return only the necessary data from your API endpoints or data layers. This prevents accidentally exposing sensitive information, like password hashes, to the client.
-   **Auth in different contexts**:
    -   **Server Components**: Conditionally render UI based on user roles.
    -   **Layouts**: Avoid performing auth checks in layouts that don't re-render on navigation, as the session might not be re-validated.
    -   **Server Actions**: Treat them as public API endpoints. Always verify that the user has the required permissions to perform the action.
    -   **Route Handlers**: Similar to Server Actions, they should be treated as API endpoints and require authentication and authorization checks.

### Server Actions

Server Actions are functions that execute on the server. They must be secured properly.

-   **Permissions Check**: Always validate the user's session and permissions at the beginning of a Server Action.
-   **Input Validation**: Sanitize and validate all input received from the client to prevent vulnerabilities.

    ```typescript
    'use server';

    import { auth } from '@/lib/auth'; // Your authentication logic
    import { db } from '@/lib/db';

    export async function updatePost(formData: FormData) {
      const session = await auth();

      if (!session?.user) {
        throw new Error('Unauthorized');
      }

      const postId = formData.get('id');
      const content = formData.get('content');

      // Add input validation here (e.g., with Zod)

      // Check if user has permission to edit this specific post
      const post = await db.post.findUnique({ where: { id: postId } });
      if (post.authorId !== session.user.id) {
        throw new Error('Forbidden');
      }

      // ... proceed with update
    }
    ```

## Security Headers
In addition to a Content Security Policy (CSP), several other HTTP headers are essential for securing your application. You can set these in your `next.config.js` file.

```javascript
// next.config.js
const securityHeaders = [
  // Prevents browser from guessing the content type
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Prevents clickjacking
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Enforces HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### Content Security Policy (CSP)
A Content Security Policy (CSP) is important to guard your Next.js application against various security threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.

Implementing a strict CSP in a React application requires careful configuration, especially regarding inline scripts. By default, Create React App embeds a small runtime script inline in `index.html`. To create a secure CSP, you must disable this behavior. You can do this by setting the `INLINE_RUNTIME_CHUNK=false` environment variable in your `.env` file or your build script:
```bash
INLINE_RUNTIME_CHUNK=false npm run build
```
Once you've removed inline scripts, you can implement a CSP. The policy can be delivered via a `<meta>` tag in your HTML or through an HTTP header. An HTTP header is generally more flexible.

Here is an example of a strict CSP that only allows resources from the same origin:
```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self';
```
In some cases, you may need to allow third-party scripts or styles. If you can't avoid inline scripts, you can use a nonce-based approach. A nonce is a randomly generated string that is unique for each request. You include the nonce in your CSP header and in the script tag.

Example of a nonce-based policy:
```http
Content-Security-Policy: script-src 'self' 'nonce-rAnd0m';
```
And in your HTML:
```html
<script nonce="rAnd0m"> // this value needs to be randomized!
  // Inline script
</script>
```
This ensures that only the scripts with the correct nonce will be executed, blocking any injected scripts that do not have the nonce.


## Package Manager Security

A significant portion of frontend security revolves around how you manage your dependencies through package managers like `npm`, `yarn`, or `pnpm`.

### Use a Stricter Package Manager

It is recommended to use `pnpm` over `npm` or `yarn`. `pnpm`'s non-flat `node_modules` structure provides stricter package isolation, reducing the risk of unauthorized package access by dependencies. It is also more efficient with disk space and generally faster.

### Disable Post-Install Scripts

A common attack vector is the use of `postinstall` scripts in `package.json`. These scripts execute arbitrary code on your machine when a package is installed. You can mitigate this risk by disabling them.

- **npm**: You can disable scripts globally or on a per-install basis.
  ```bash
  # Disable globally (recommended)
  npm config set ignore-scripts true

  # Disable for a single installation
  npm install --ignore-scripts <package-name>
  ```
- **pnpm & Bun**: Both `pnpm` (v10+) and `bun` disable post-install scripts by default, offering an "escape hatch" to allow them for trusted dependencies if necessary.

### Ensure Deterministic Installs in CI/CD

To ensure that your builds are reproducible and use the exact dependency versions specified in your lock file, use `npm ci` instead of `npm install` in your continuous integration (CI) environments. This also provides a faster and more reliable installation process.

```bash
npm ci
```

### Install with a Cooldown Period

Attackers sometimes publish a new version of a package with malicious code, which gets quickly downloaded before it's discovered. You can add a "cooldown" period to delay the installation of the very latest package versions.

- **npm**: Use the `--before` flag to only install packages published before a certain date.
  ```bash
  # Example: 7-day cooldown
  npm install express --before="$(date -v -7d)"
  ```
- **pnpm**: `pnpm` has a built-in feature for this called `minimumReleaseAge`. You can configure it in your `.npmrc` or `pnpm-workspace.yaml` file.
  ```yaml
  # In .npmrc or pnpm-workspace.yaml
  minimumReleaseAge: 1440 # 1440 minutes = 24 hours
  ```
  This setting will prevent the installation of any package version that is less than 24 hours old.

### Avoid Blind Dependency Upgrades

While keeping dependencies updated is crucial, avoid blindly upgrading to the latest version with commands like `npm update`. This can introduce breaking changes or security vulnerabilities.

Instead, use tools that provide more control and visibility:
- **Interactive Upgrades**: Use a tool like `npm-check-updates` in interactive mode to review changes before applying them.
  ```bash
  npx npm-check-updates --interactive
  ```
- **Automated Pull Requests**: Use services like Dependabot or Snyk to create automated pull requests for dependency updates. This allows you to run your test suite and review changes before merging.


## Secure Development Environment

### Work in Dev Containers

To limit the blast radius of a potential supply chain attack, consider using development containers (dev containers). A dev container provides an isolated, sandboxed environment for your project. If a malicious npm package executes code, it will be confined to the container, unable to access sensitive files or resources on your host machine.

You can set one up by adding a `.devcontainer/devcontainer.json` file to your project and using an editor that supports them, like VS Code.

*Example `devcontainer.json`:*
```json
{
  "name": "Node.js Dev Container",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "features": {
    "ghcr.io/devcontainers/features/1password:1": {}
  },
  "postCreateCommand": "npm ci"
}
```

## For Package Maintainers

If you are a maintainer of npm packages, follow these best practices to secure your own packages and protect your users.

### Enable Two-Factor Authentication (2FA)

Protect your npm account from takeover by enabling two-factor authentication. This adds a critical layer of security, preventing unauthorized publishing of malicious versions of your packages.

```bash
# Enable 2FA for both authentication and publishing
npm profile enable-2fa auth-and-writes
```

### Publish with Provenance

Provenance provides verifiable proof of where and how your package was built. It creates a cryptographic link between your source code repository and the published package, assuring users that the package was not tampered with.

You can enable this in your GitHub Actions workflow by granting `id-token: write` permissions and using the `--provenance` flag.

```yaml
# In your GitHub Actions workflow .yml file
permissions:
  id-token: write
steps:
  - run: npm publish --provenance
```

### Publish with OIDC to Avoid Long-Lived Tokens

Instead of using traditional `NPM_TOKEN` secrets in your CI/CD environment, use trusted publishing with OpenID Connect (OIDC). This method uses short-lived, auto-generated tokens that are scoped to your specific workflow, eliminating the risk of a long-lived token being leaked or stolen.

When you configure trusted publishing on npmjs.com, you no longer need the `--provenance` flag, as it is enabled automatically.

```yaml
# In your GitHub Actions workflow .yml file
permissions:
  id-token: write
steps:
  - run: npm publish
```

## Security Checklist

This checklist provides a summary of actionable steps to secure your React and Next.js application.

1.  **Dependency Management**
    - Use `pnpm` as your package manager for better package isolation.
    - Disable `postinstall` scripts in your `npm` configuration.
    - Use `npm ci` for deterministic installs in CI/CD environments.
    - Configure a "cooldown" period (`minimumReleaseAge` in `pnpm`) for new packages.
    - Regularly audit dependencies with `npm audit` or `yarn audit`.
    - Use automated tools like Dependabot for dependency updates.
    - Review dependency upgrades interactively; avoid blind updates.
    - Minimize your dependency footprint.

2.  **Code & Data Security**
    - Sanitize user input to prevent XSS, especially when using `dangerouslySetInnerHTML`.
    - Avoid direct DOM manipulation with `refs` and `innerHTML`.
    - Validate URLs to prevent `javascript:` scheme attacks.
    - Implement anti-CSRF tokens if using session-based authentication.
    - Use `server-only` and `client-only` packages to enforce component boundaries.
    - Validate and sanitize all data in Server Actions and API routes (e.g., with Zod).

3.  **Secrets Management**
    - Never hardcode secrets in your codebase.
    - Use environment variables, prefixing client-exposed variables with `NEXT_PUBLIC_`.
    - For higher security, use a secrets management tool (e.g., 1Password CLI, Infisical) to avoid plaintext secrets in `.env` files.

4.  **Infrastructure & Configuration**
    - Implement strict Content Security Policy (CSP) and other security headers (`X-Content-Type-Options`, `X-Frame-Options`, etc.).
    - Use Dev Containers for an isolated development environment.
    - Implement rate limiting on APIs to prevent DDoS attacks.

5.  **For Package Maintainers**
    - Enable Two-Factor Authentication (2FA) on your npm account.
    - Publish packages with provenance (`--provenance`).
    - Use OIDC for publishing to avoid long-lived tokens.

6.  **Tooling & Automation**
    - Use third-party security scanners like Snyk or OWASP Dependency-Check.
    - Enable security linting rules in your code editor.

## Sources

-   [React Native - Security](https://reactnative.dev/docs/security)
-   [React JS Security Best Practices](https://dev.to/kristiyanvelkov/react-js-security-best-practices-15g7)
-   [Next.js - Authentication](https://nextjs.org/docs/app/guides/authentication)
-   [Next.js - Security: Server Components and Server Actions](https://nextjs.org/blog/security-nextjs-server-components-actions)
-   [Next.js - Data Security](https://nextjs.org/docs/app/guides/data-security)
-   [React XSS Guide: Examples and Prevention](https://www.stackhawk.com/blog/react-xss-guide-examples-and-prevention/)
-   [pnpm Settings](https://pnpm.io/settings)
-   [Snyk Code Checker for JavaScript](http://snyk.io/code-checker/javascript/)
-   [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)
-   [OWASP Dependency-Check GitHub Repository](https://github.com/dependency-check/DependencyCheck)
-   [OWASP France - CSP with React](https://owasp.org/www-chapter-france/event/2020/2020-09-10_csp_with_react.pdf)
-   [npm Security Best Practices by Liran Tal](https://github.com/lirantal/npm-security-best-practices)
