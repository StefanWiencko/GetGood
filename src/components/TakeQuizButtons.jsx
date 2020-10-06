import React from "react";
import "../scss/_TakeQuizButtons.scss";
import { Link } from "react-router-dom";

function TakeQuizButtons({startOver}) {
  return (
    <div className="takeQuizButtons">
      <div onClick={startOver} className="quizButton">Zacznij od początku</div>
      <Link to='/' className="quizButton">
        <div>Wyjdź</div>
      </Link>
    </div>
  );
}

export default TakeQuizButtons;
