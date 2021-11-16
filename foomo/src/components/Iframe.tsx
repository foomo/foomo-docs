import React from "react";

export const Iframe = (props: { proportion:number; src:string }) => (
  <div
    style={{
      width: "100%",
      height: 0,
      paddingTop: (100 / props.proportion ) + "%",
      position: "relative",
      float:"left",
    }}
  >
    <iframe
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        position: "absolute",
        top:0,
        left:0,
      }}
      src={props.src}
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    ></iframe>
  </div>
);
