import React from "react";
import "../scss/_Main.scss";
import { Link } from "react-router-dom";

function FirstPageButtons() {
  return (
    <div className="firstPageButtons">
      <Link to='/newquiz'>
        <button className="newQuiz">Stwórz nowy quiz</button>
      </Link>
    </div>
  );
}

export default FirstPageButtons;
