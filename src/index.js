import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Message />
      </div>
    </div>
  );
}

function Message() {
  return <div className="message">This is less than 140 characters.</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Kapil</span>
      <span className="handle">@yourKapil</span>
    </span>
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));
