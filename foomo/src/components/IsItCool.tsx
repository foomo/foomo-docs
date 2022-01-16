import React, { useEffect, useState } from "react";

const yes = "yes";
const SSR = typeof localStorage === "undefined";

const getISCool = (id) => {
  if(typeof localStorage === "undefined") {
    return false;
  }
  return localStorage.getItem(id);
}

export const IsItCool = (props: {
  children: any;
  topic: string;
  id: string;
}) => {
  const [isCool, setIsCool] = useState(getISCool(props.id));
  useEffect(() => {
    console.log("well it is cool",props.id, {isCool, SSR})
  }, [isCool, SSR]);
  if (!isCool) {
    return (
      <div>
        <button
          className="button button--lg button--secondary"
          onClick={(_e) => {
            localStorage.setItem(props.id, yes);
            setIsCool(true);
          }}
        >
          {props.topic}
        </button>
      </div>
    );
  }
  return props.children;
};
