import React from "react";

function Title(p) {
  return (
    <center>
      <br />
      <br />
      <br />
      <h1 className="text-[30px] font-[700] ">{p.title}</h1>

      <p>{p.subtitle}</p>
    </center>
  );
}

export default Title;
