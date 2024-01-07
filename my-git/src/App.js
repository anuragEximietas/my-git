import React, { useState } from "react";
import A from "./A";

function App() {
  return (
    <div>
      <A />
    </div>
  );
}

function B(props) {
  const { text } = props;
  return <h1>{text.toUpperCase()}</h1>;
}

function C(props) {
  const { text } = props;
  return <h1>{text.toLowerCase()}</h1>;
}

export default App;