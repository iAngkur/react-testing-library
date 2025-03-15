import React from "react";

function Greet({ name }) {
  return <div>Hello {name ?? "John Doe"}</div>;
}

export default Greet;
