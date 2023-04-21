import React from "react";

export const Iframe = (props:React.PropsWithRef<{
  proportion?: number;
  src: string;
  style?: React.CSSProperties;
}> ) => {
  let { proportion, src, style } = props;
  if (!proportion) {
    proportion = 4 / 3;
  }
  if (style) {
    style = {};
  }

  return (
    <div
      style={{
        width: "100%",
        height: 0,
        paddingTop: 100 / proportion + "%",
        position: "relative",
        float: "left",
        ...style,
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src={src}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    </div>
  );
};
