import React from "react";
import "../scss/_FirstPageScrolElements.scss";
import { Link } from "react-router-dom";

function FirstPageScrolElements({ allQuizes, chooseQuizHandler }) {
  return (
    <div className="firstPageScrolElements">
      {allQuizes.map((e) => (
        <Link key={e.id} onClick={chooseQuizHandler} to="/takequiz">
          <div id={e.id} className="firstPageScrolElement">
            {e.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FirstPageScrolElements;
