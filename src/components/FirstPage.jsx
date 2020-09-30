import React, { useState, useEffect } from "react";
import "../scss/_FirstPage.scss";
import FirstPageScrolbar from "./FirstPageScrolbar";

function FirstPage() {
//   const [allQuizes, setAllQuizes] = useState([]);

//   useEffect(() => {
//     fetchAllQuizes();
//   }, []);

//   console.log(allQuizes);

//   const fetchAllQuizes = () => {
//     fetch("http://localhost:4000/quizs")
//       .then((resp) => resp.json())
//       .then((data) => setAllQuizes(data));
//   };
  return (
    <div className="firstPageContent">
      <FirstPageScrolbar  />
    </div>
  );
}

export default FirstPage;
