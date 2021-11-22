import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          style={{
            maxWidth: "200px",
            border: "1px white solid",
            borderRadius: "1rem",
          }}
          src="https://avatars.githubusercontent.com/u/889755"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <q>{siteConfig.tagline}</q>
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div
        className="container"
        style={{
          maxWidth: "640px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <br />
        <p>
          <b>foomo</b> is an open source project, that has been maintained by
          the <a href="https://www.bestbytes.com">bestbytes</a> team since 2011.
          It provides a wide range of tools and libraries, that help us to
          tackle challenging projects.
        </p>
        <h2>foomo can help, if you are</h2>
        <ul>
          <li>
            using <a href="https://www.golang.org">Go</a> to write services
          </li>
          <li>
            building frontends with{" "}
            <a href="https://www.typescriptlang.org/">TypeScript</a> and{" "}
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            running your software on <a href="https://kubernetes.io/">k8s</a>
          </li>
          <li>
            looking for a solution to deeply integrate your frontends with a
            headless cms
          </li>
        </ul>
        <sub>If more than two points apply, it will actually help a LOT</sub>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
