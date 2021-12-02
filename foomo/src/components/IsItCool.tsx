import React, { useState } from "react";


if(typeof localStorage == "undefined") {
  var localStorage = {setItem:(name, value) => {}, getItem: (name) => {return null}};
}

export const IsItCool = (props: {
  children: any;
  topic: string;
  id: string;
}) => {
  let defaultIsCool = false;
  if (localStorage.getItem(props.id) == "yes") {
    defaultIsCool = true;
  }
  const [isCool, setIsCool] = useState(defaultIsCool);
  if (!isCool) {
    return (
      <div>
        <button
          className="button button--lg button--secondary"
          onClick={(_e) => {
            localStorage.setItem(props.id, "yes");
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
