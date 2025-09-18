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

### Server-Side Rendering (SSR)

When using SSR, ensure that any data included in the initial server-rendered page is properly sanitized, especially if it includes user-generated content. This prevents XSS during the client-side hydration phase.

### Cross-Site Request Forgery (CSRF)

A CSRF attack tricks a victim into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on their behalf. For instance, a CSRF attack could force a user to transfer funds or change their email address without their knowledge.

To prevent CSRF, you should use anti-CSRF tokens. These are unique, secret, and unpredictable values generated by the server and sent to the client. The client includes this token in subsequent requests. The server validates the token before processing the request.

### Other Vulnerabilities

-   **Zip Slip**: This vulnerability occurs when handling zip files. An attacker can craft a malicious archive that, when extracted, overwrites files in the filesystem. If your application handles file uploads, particularly archives, use a library that is not vulnerable to path traversal to extract files.

-   **Broken Authentication**: This is a broad category of vulnerabilities that can occur when authentication and session management are not handled correctly. Common issues include weak passwords, session tokens being exposed in URLs, and improper invalidation of sessions after logout. Always use secure, well-vetted authentication libraries and follow best practices for session management.

-   **Distributed Denial of Service (DDoS)**: While primarily a backend and infrastructure concern, your frontend application can be a target. DDoS attacks aim to make your application unavailable to users by overwhelming it with traffic. Implementing rate limiting on your APIs and using services that provide DDoS protection are common mitigation strategies.

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

## Security Checklist

### 1. Package Manager
It is also recommended to use `pnpm` over `npm` or `yarn`. `pnpm` is more efficient with disk space and is generally faster. From a security perspective, its non-flat `node_modules` structure provides stricter package isolation, reducing the risk of unauthorized package access. Furthermore, `pnpm` offers advanced security features, such as `minimumReleaseAge`, which can delay the installation of new package versions to protect against supply-chain attacks where malicious code is published and quickly downloaded.

You can configure this in your `pnpm-workspace.yaml` file:
```yaml
minimumReleaseAge: 1440 # 1440 minutes = 24 hours
```
This setting will prevent the installation of any package version that is less than 24 hours old, giving time for malicious packages to be discovered and removed from the registry.

### 2. Dependencies
The first and most important step is to manage your dependencies. This is a significant source of risk, not just in terms of security but also licensing. It is important to keep your dependencies up to date, to make it easier to react when critical security patches are released. Use a tool like Dependabot to get notified about new versions of your dependencies and open pull requests to update them.

### 3. Data Validation and Sanitization
Data validation and sanitization is crucial, especially for incoming data. This is particularly important for server-side code, which interacts with your database. You should never trust data coming from the client, as it can be easily manipulated. It is recommended to use a data access layer to centralize all your database interactions and perform authentication checks before accessing data. For sensitive information, consider using tools like Arcjet to redact or deny requests containing personal data like emails or phone numbers.

### 4. Avoiding Code Exposure
Be mindful of exposing sensitive data or code to the client. Avoid hardcoding API keys or other secrets directly in your code. Instead, use environment variables to store them. For server-side code that should never be exposed to the client, you can use the server-only package, which will throw an error if it's accidentally imported into a client component.

### 5. Centralize Security Functions
A well-organized security strategy involves centralizing key functions. This approach streamlines testing, auditing, and maintenance while reducing the risk of inconsistencies or oversights. Grouping functions by their purpose, for example, creating a data access layer for all database interactions, can improve maintainability and testability.

### 6. Security Headers
Pay attention to the headers you are setting. A Content Security Policy (CSP) is important to guard your Next.js application against various security threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.

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

### 7. Code Editor
Your code editor can also help you catch security issues before you commit. Enable linting tools like ESLint to catch syntax errors, style inconsistencies, and a potential security issues early on. Tools like TruffleHog can also be used to detect secrets that may have been accidentally included in your code.

### 9. Third-Party Security Scanners
In addition to the tools and practices mentioned above, it is highly recommended to use third-party security scanners to continuously monitor your code for vulnerabilities. These tools can be integrated into your development workflow and provide real-time feedback.

-   **[Snyk](http://snyk.io/code-checker/javascript/)**: Snyk offers a free code checker that can be integrated directly into your IDE. It uses AI to analyze your code for a wide range of security issues, including SQL injection, insecure password handling, and information disclosure. It provides actionable advice to help you fix vulnerabilities quickly.

-   **[OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)**: This is a Software Composition Analysis (SCA) tool that detects publicly disclosed vulnerabilities within a project’s dependencies. It can be run via a command line interface, Maven plugin, or Jenkins plugin, and it generates reports that link to CVE entries. You can find its source code on [GitHub](https://github.com/dependency-check/DependencyCheck).

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
