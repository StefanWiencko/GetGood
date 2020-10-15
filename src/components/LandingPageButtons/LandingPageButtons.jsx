import React from "react";
import "../../scss/_Main.scss";
import { Link } from "react-router-dom";

function LandingPageButtons() {
  return (
    <div className="landingPageButtons">
      <Link to='/newquiz'>
        <button className="newQuiz">Stwórz nowy quiz</button>
      </Link>
    </div>
  );
}

export default LandingPageButtons;
