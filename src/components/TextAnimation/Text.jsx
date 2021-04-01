import React from "react";
import TextA from "./TextA";

export default function Text(props) {
  return (
    <div>
      <h1 className="ani">
        <TextA text={props.name} />
      </h1>
    </div>
  );
}
