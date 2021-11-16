import React from "react";
import { Iframe } from "./Iframe";
import { IsItCool } from "./IsItCool";

//src={"https://play.golang.org/p/" + props.id}

export const GoPlayground = (props: { id: string; proportion: number }) => {
  return (
    <IsItCool topic="load external go playground, with all it´s potentially evil cookies coming from https://goplay.tools" id="goPlaygroundIsCool">
      <Iframe
        src={"https://goplay.tools/snippet/" + props.id}
        proportion={props.proportion}
      />
    </IsItCool>
  );
};
