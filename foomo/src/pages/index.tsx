import React, { ReactChildren } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "black",
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
};

const ImportantLink = (props: { href: string; children: any }) => {
  return (
    <span
      style={{
        fontWeight: "bold",
        backgroundColor: "#ffea00",
        border: "none",
        // borderRadius: "2px",
        padding: "1px 4px",
        textShadow: "1px 1px 2px #00000081"
      }}
      title={props.href}
      >
      <a href={props.href} style={{
        color: "white",
      }}>
        {props.children}
      </a>
    </span>
  );
};

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
          the{" "}
          <ImportantLink href="https://www.bestbytes.com">
            bestbytes
          </ImportantLink>{" "}
          team since 2011. It provides a wide range of utilities, libraries and
          daemons, that help us to tackle challenging projects.
        </p>
        <h2>foomo can help, if you are</h2>
        <ul>
          <li>
            using{" "}
            <ImportantLink href="https://www.golang.org">Go</ImportantLink> to
            write services
          </li>
          <li>
            building frontends with{" "}
            <ImportantLink href="https://www.typescriptlang.org/">
              TypeScript
            </ImportantLink>{" "}
            and{" "}
            <ImportantLink href="https://nextjs.org/">Next.js</ImportantLink>
          </li>
          <li>
            running your software on{" "}
            <ImportantLink href="https://kubernetes.io/">k8s</ImportantLink>
          </li>
          <li>
            looking for a solution to deeply integrate your frontends with a{" "}
            <ImportantLink href="https://jamstack.org">
              headless cms
            </ImportantLink>
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
