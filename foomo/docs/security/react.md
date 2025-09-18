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
- [Next.js Security](#nextjs-security)
  - [Data Security](#data-security)
  - [Authentication](#authentication)
  - [Server Actions](#server-actions)
- [Sources](#sources)
- [Security Checklist](#security-checklist)
  - [1. Dependencies](#1-dependencies)
  - [2. Data Validation and Sanitization](#2-data-validation-and-sanitization)
  - [3. Avoiding Code Exposure](#3-avoiding-code-exposure)
  - [4. Centralize Security Functions](#4-centralize-security-functions)
  - [5. Security Headers](#5-security-headers)
  - [6. Code Editor](#6-code-editor)
  - [7. Rate Limiting and Security Audits](#7-rate-limiting-and-security-audits)

## General React Security

### Cross-Site Scripting (XSS)

React helps mitigate XSS attacks by automatically escaping content rendered in JSX. However, there are still ways vulnerabilities can be introduced.

-   **`dangerouslySetInnerHTML`**: This prop should be avoided. If you must use it, ensure the HTML content is sanitized using a library like `DOMPurify`.
-   **Direct DOM Access**: Using `refs` to directly manipulate the DOM can bypass React's security mechanisms.
-   **URL Schemes**: Dynamic URLs in `href` attributes can be exploited with `javascript:` schemes. Validate and sanitize all URLs.

### Third-Party Package Vulnerabilities

Modern applications rely heavily on third-party packages.

-   **Audit Dependencies**: Regularly run `npm audit` or `yarn audit` to identify and fix known vulnerabilities in your dependencies.
-   **Keep Packages Updated**: Use tools like Dependabot to automatically create pull requests for dependency updates.

### API Security

-   **Authentication & Authorization**: Implement robust authentication and authorization on your backend APIs.
-   **Environment Variables**: Never hardcode API keys or other secrets in your frontend code. Use environment variables (e.g., `.env.local`) and prefix them with `NEXT_PUBLIC_` in Next.js if they need to be exposed to the browser. Keys without the prefix are only available on the server-side.

### Server-Side Rendering (SSR)

When using SSR, ensure that any data included in the initial server-rendered page is properly sanitized, especially if it includes user-generated content. This prevents XSS during the client-side hydration phase.

## Next.js Security

Next.js introduces its own security considerations, especially with the introduction of Server Components and Server Actions.

### Data Security

Next.js provides mechanisms to prevent sensitive data from being leaked to the client.

-   **Server Components**: By default, components in the `app` directory are Server Components. They run only on the server, so sensitive logic and data fetching can be kept out of the client-side bundle.
-   **`server-only` and `client-only` packages**: You can use these packages to ensure that a module is only ever imported into a Server or Client Component, respectively. This prevents accidentally including server-side code on the client.
-   **Data Tainting**: Next.js has experimental support for tainting objects to prevent them from being passed from the server to the client. This can be used to protect sensitive data.

### Authentication

Next.js provides a comprehensive guide on authentication.

-   **Middleware**: Use Middleware to protect routes by running code before a request is completed. You can check for a valid session and redirect unauthenticated users.
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

## Security Checklist

### 1. Dependencies
The first and most important step is to manage your dependencies. This is a significant source of risk, not just in terms of security but also licensing. It is important to keep your dependencies up to date, to make it easier to react when critical security patches are released. Use a tool like Dependabot to get notified about new versions of your dependencies and open pull requests to update them.

### 2. Data Validation and Sanitization
Data validation and sanitization is crucial, especially for incoming data. This is particularly important for server-side code, which interacts with your database. You should never trust data coming from the client, as it can be easily manipulated. It is recommended to use a data access layer to centralize all your database interactions and perform authentication checks before accessing data. For sensitive information, consider using tools like Arcjet to redact or deny requests containing personal data like emails or phone numbers.

### 3. Avoiding Code Exposure
Be mindful of exposing sensitive data or code to the client. Avoid hardcoding API keys or other secrets directly in your code. Instead, use environment variables to store them. For server-side code that should never be exposed to the client, you can use the server-only package, which will throw an error if it's accidentally imported into a client component.

### 4. Centralize Security Functions
A well-organized security strategy involves centralizing key functions. This approach streamlines testing, auditing, and maintenance while reducing the risk of inconsistencies or oversights. Grouping functions by their purpose, for example, creating a data access layer for all database interactions, can improve maintainability and testability.

### 5. Security Headers
Pay attention to the headers you are setting. A Content Security Policy (CSP) is important to guard your Next.js application against various security threats such as cross-site scripting (XSS), clickjacking, and other code injection attacks.

### 6. Code Editor
Your code editor can also help you catch security issues before you commit. Enable linting tools like ESLint to catch syntax errors, style inconsistencies, and potential security issues early on. Tools like TruffleHog can also be used to detect secrets that may have been accidentally included in your code.

## Sources

-   [React Native - Security](https://reactnative.dev/docs/security)
-   [React JS Security Best Practices](https://dev.to/kristiyanvelkov/react-js-security-best-practices-15g7)
-   [Next.js - Authentication](https://nextjs.org/docs/app/guides/authentication)
-   [Next.js - Security: Server Components and Server Actions](https://nextjs.org/blog/security-nextjs-server-components-actions)
-   [Next.js - Data Security](https://nextjs.org/docs/app/guides/data-security)
