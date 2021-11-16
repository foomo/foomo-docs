import React from "react";
import { Iframe } from "./Iframe";
import { IsItCool } from "./IsItCool";

export const Miro = (props: { id: string; proportion: number }) => (
  <IsItCool topic="load miro board from https://miro.com" id="miroIsCool">
    <Iframe
      src={"https://miro.com/app/embed/" + props.id + "/?pres=1&autoplay=yep"}
      proportion={props.proportion}
    />
  </IsItCool>
);
