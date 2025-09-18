import { useCallback } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// function App() {

//   return (
//     <div>
//       <button onClick={}>Enter fullscreen</button>

//       <FullScreen handle={handle}>Any fullscreen content here</FullScreen>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { Iframe } from "./Iframe";
import { IsItCool } from "./IsItCool";

import { Highlight, defaultProps } from "prism-react-renderer";
import Link from "@docusaurus/Link";

export const GoPlayground = (props: { id: string; proportion: number }) => {
  const [interactive, setInteractive] = useState(false);
  const [source, setSource] = useState("");
  const handle = useFullScreenHandle();
  useEffect(() => {
    if (source == "" && props.id !== "") {
      fetch("https://docs.bestbytes.com/services/playground?id=" + props.id, {
        mode: "cors",
      })
        .then((res) => res.text().then((newSource) => setSource(newSource)))
        .catch((e) => setSource("can not load source yet"));
    }
  }, [source]);
  const href = "https://goplay.tools/snippet/" + props.id;

  return (
    <>
      <div style={{ paddingBottom: "1rem", width: "100%" }}>
        {interactive ? (
          <>
            <button
              className={"button button--primary"}
              onClick={(_e) => {
                setInteractive(false);
              }}
            >
              close playground
            </button>{" "}
            <button
              className={
                "button button--primary" + (interactive ? "" : " disabled")
              }
              onClick={(_e) => {
                handle.enter();
              }}
            >
              fullscreen
            </button>{" "}
          </>
        ) : (
          <button
            className={"button button--primary"}
            onClick={(_e) => {
              setInteractive(true);
            }}
          >
            open playground
          </button>
        )}{" "}
        <Link href={href}>go to {href}</Link>
      </div>
      {!interactive && (
        <Highlight {...defaultProps} code={source} language="go">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {source == "" ? "... loading sources" : ""}
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
      <div style={{ display: interactive ? "block" : "none" }}>
        <IsItCool
          topic="load external go playground, with all it´s potentially evil cookies coming from https://goplay.tools"
          id="goPlaygroundIsCool"
        >
          <div>
            <FullScreen handle={handle}>
              <Iframe src={href} proportion={props.proportion} />
            </FullScreen>
          </div>
        </IsItCool>
      </div>
    </>
  );
};
