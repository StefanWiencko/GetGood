import React, { useState, useEffect } from "react";
import "../../scss/_Main.scss";
import LandingPageScrolbar from "../LandingPageScrolbar/LandingPageScrolbar";
import LandingPageButtons from "../LandingPageButtons/LandingPageButtons";

function LandingPage({chooseQuizHandler,fetchQuizHandler}) {
  useEffect(() => {
    fetchAllQuizes();
  },[]);

  const [allQuizes, setAllQuizes] = useState([]);

  const fetchAllQuizes = () => {
    fetch("http://localhost:4000/quizzes")
      .then((resp) => resp.json())
      .then((data) => setAllQuizes(data));
  };
  return (
    <div className="landingPageContent">
      <LandingPageScrolbar chooseQuizHandler={chooseQuizHandler} allQuizes={allQuizes} fetchQuizHandler={fetchQuizHandler}/>
      <LandingPageButtons/>
    </div>
  );
}

export default LandingPage;
