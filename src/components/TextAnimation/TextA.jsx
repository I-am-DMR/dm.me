import React, { useState, useEffect } from "react";
import "./TextA.css";

export default function TextA(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const arrText = [];
    for (var i = 1; i <= props.length; i++) {
      arrText.push(props.slice(i - 1, i));
    }
    setState(arrText);
  }, [props]);
  const text = props.text.slice(0, 5);
  return state.map(data => <span>{data}</span>);
}
