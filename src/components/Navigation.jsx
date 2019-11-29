import React from "react";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark mt-1"
      style={{
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
      }}
    >
      <a className="navbar-brand" href="/">
        Todo App With React Js
      </a>
    </nav>
  );
};

export default Navigation;
