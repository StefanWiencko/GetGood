import React, { useState, useEffect } from "react";
import "../../scss/_Main.scss";
import FirstPageScrolbar from "../LandingPageScrolbar/LandingPageScrolbar";
import FirstPageButtons from "../LandingPageButtons/LandingPageButtons";

function FirstPage({chooseQuizHandler,fetchQuizHandler}) {
  useEffect(() => {
    fetchAllQuizes();
  },[]);

  const [allQuizes, setAllQuizes] = useState([]);

  const fetchAllQuizes = () => {
    fetch("http://localhost:4000/quizs")
      .then((resp) => resp.json())
      .then((data) => setAllQuizes(data));
  };
  return (
    <div className="firstPageContent">
      <FirstPageScrolbar chooseQuizHandler={chooseQuizHandler} allQuizes={allQuizes} fetchQuizHandler={fetchQuizHandler}/>
      <FirstPageButtons/>
    </div>
  );
}

export default FirstPage;
