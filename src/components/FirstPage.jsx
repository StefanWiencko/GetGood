import React, { useState, useEffect } from "react";
import "../scss/_Main.scss";
import FirstPageScrolbar from "./FirstPageScrolbar";
import FirstPageButtons from "./FirstPageButtons";

function FirstPage({chooseQuizHandler,fetchQuizHandler}) {
  useEffect(() => {
    fetchAllQuizes();
  },[]);

  let [allQuizes, setAllQuizes] = useState([]);

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
