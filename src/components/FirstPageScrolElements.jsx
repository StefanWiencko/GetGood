import React from "react";
import "../scss/_Main.scss";
import { Link } from "react-router-dom";

function FirstPageScrolElements({ allQuizes, chooseQuizHandler,fetchQuizHandler }) {
  return (
    <div className="firstPageScrolElements">
      {allQuizes.map((e) => (
        <Link key={e.id} id={e.id} className="firstPageScrolElement" onClick={fetchQuizHandler} onMouseDown={chooseQuizHandler} to="/takequiz">
          <div id={e.id}>
            {e.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FirstPageScrolElements;
