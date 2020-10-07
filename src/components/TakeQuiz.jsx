import React, { useState, useEffect } from "react";
import "../scss/_TakeQuiz.scss";
import TakeQuizQuestion from "./TakeQuizQuestion";
import TakeQuizButtons from "./TakeQuizButtons";
import TakeQuizCount from "./TakeQuizCount";

function TakeQuiz({ quizID, correctCounterHandler, setCorrectCounter }) {
  useEffect(() => {
    fetchAllQuizes();
  }, []);

  const [quizQuestions, setQuizQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);

  const clickHandler = (e) => {
    correctCounterHandler(e);
    if (quizQuestions.questions.length > questionNumber + 1) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      return;
    }
  };
  const startOver = () => {
    setQuestionNumber(0);
    setCorrectCounter(0);
  };

  const fetchAllQuizes = () => {
    fetch("http://localhost:4000/quizs")
      .then((resp) => resp.json())
      .then((data) =>
        data.forEach((e) => {
          if (e.id === quizID) {
            console.log('fetch')
            return setQuizQuestions(e);
          } else {
            return;
          }
        })
      );
  };
  console.log(quizQuestions);
  return (
    <div className="takeQuizContent">
      {quizQuestions && (
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
