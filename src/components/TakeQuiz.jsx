import React, { useState, useEffect } from "react";
import "../scss/_Main.scss";
import TakeQuizQuestion from "./TakeQuizQuestion";
import TakeQuizButtons from "./TakeQuizButtons";
import TakeQuizCount from "./TakeQuizCount";
import TakeQuizSummary from "./TakeQuizSummary";

function TakeQuiz({
  correctCounterHandler,
  setCorrectCounter,
  correctCounter,
  quizQuestions
}) {
  // const [quizQuestions, setQuizQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    // fetchAllQuizes();
    // console.log("fetch", quizQuestions);
    shuffleQuestions(quizQuestions);
  }, []);
  console.log(quizQuestions)
  const clickHandler = (e) => {
    correctCounterHandler(e);
    if (quizQuestions.questions.length > questionNumber) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      return;
    }
  };
  const startOver = () => {
    setQuestionNumber(0);
    setCorrectCounter(0);
    // setQuizQuestions((prev) => shuffle(prev));
  };
  
  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  const shuffleQuestions = (obj) => {
    // shuffle(obj.questions)
    obj.questions.forEach((arr) => shuffle(arr[0].answers));
  };

  // const fetchAllQuizes = () => {
  //   fetch("http://localhost:4000/quizs")
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       data.forEach((e) => {
  //         if (e.id === quizID) {
  //           setQuizQuestions(e);
  //         }
  //       })
  //     );
  // };
  // console.log(quizQuestions)
  if (quizQuestions) {
    shuffleQuestions(quizQuestions);
  }
  return (
    <div className="takeQuizContent">
      {quizQuestions && questionNumber === quizQuestions.questions.length ? (
        <>
          <TakeQuizButtons startOver={startOver} />
          <TakeQuizSummary
            correctCounter={correctCounter}
            quizQuestions={quizQuestions}
          />
        </>
      ) : (
        <>
          <TakeQuizButtons startOver={startOver} />
          <TakeQuizQuestion
            questionNumber={questionNumber}
            clickHandler={clickHandler}
            quizQuestions={quizQuestions}
          />
          <TakeQuizCount
            questionNumber={questionNumber}
            quizQuestions={quizQuestions}
          />
        </>
      )}
    </div>
  );
}

export default TakeQuiz;
