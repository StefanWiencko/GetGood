import React, { useState, useEffect } from "react";
import "../scss/_FirstPage.scss";
import FirstPageScrolbar from "./FirstPageScrolbar";
import FirstPageButtons from "./FirstPageButtons";

function FirstPage() {
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
      <FirstPageScrolbar allQuizes={allQuizes} />
      <FirstPageButtons/>
    </div>
  );
}

export default FirstPage;
