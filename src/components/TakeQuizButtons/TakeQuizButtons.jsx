import React from "react";
import "../../scss/_Main.scss";
import { Link } from "react-router-dom";

function TakeQuizButtons({startOver}) {
  return (
    <div className="takeQuizButtons">
      <div onClick={startOver} className="quizButton">Zacznij od początku</div>
      <Link onClick={startOver} to='/' className="quizButton">
        Wyjdź
      </Link>
    </div>
  );
}

export default TakeQuizButtons;
