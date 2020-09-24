import React from "react";
import "../scss/_Main.scss";
import NewQuiz from "./NewQuiz";

function Main() {
  return (
    <div className="appBody">
      <header className="header">
        <div className="logo" />
      </header>
      <NewQuiz />
    </div>
  );
}

export default Main;
