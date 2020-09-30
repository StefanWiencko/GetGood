import React from "react";
import "../scss/_MainView.scss";
import FirstPage from "./FirstPage";

function MainView() {
  return (
    <div className="appBody">
      <header className="header">
        <div className="logo" />
      </header>
      {/* <NewQuiz /> */}
      <FirstPage/>
    </div>
  );
}

export default MainView;
