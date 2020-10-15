import React from "react";
import "../../scss/_Main.scss";
import { Link } from "react-router-dom";

function LandingPageScrolElements({ allQuizes, chooseQuizHandler }) {
  return (
    <div className="landingPageScrolElements">
      {allQuizes.map((e) => (
        <Link key={e.id} id={e.id} className="landingPageScrolElement"  onMouseDown={chooseQuizHandler} to="/takequiz">
          <div id={e.id}>
            {e.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LandingPageScrolElements;
