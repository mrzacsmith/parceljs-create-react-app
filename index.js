import React from "react";
import { render } from "react-dom";
import "./styles.scss";

function HelloWorld(props) {
  return <div>Hello World</div>;
}

render(<HelloWorld />, document.querySelector("#root"));
