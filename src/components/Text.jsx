import React from "react";

function Text({ content, title }) {
  return (
    <div className="textContainer">
      <div className="wrapper">
        <h1>{title}</h1>
        <h3>{content}</h3>
      </div>
    </div>
  );
}

export default Text;
