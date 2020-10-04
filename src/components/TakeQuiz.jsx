import React, { useState, useEffect } from "react";
import "../scss/_TakeQuiz.scss";
import TakeQuizQuestion from "./TakeQuizQuestion";
import TakeQuizButtons from "./TakeQuizButtons";
import TakeQuizCount from "./TakeQuizCount";

function TakeQuiz({ quizID }) {
  useEffect(() => {
    fetchAllQuizes();
  }, []);

  const [quizQuestions, setQuizQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);

  const clickHandler = (e)=>{
    console.log(e.target.dataset.correct)
    if(quizQuestions.questions.length > questionNumber + 1){
      setQuestionNumber(prev => prev + 1)
    }else{
      return
    }
    
  }

  const fetchAllQuizes = () => {
    fetch("http://localhost:4000/quizs")
      .then((resp) => resp.json())
      .then((data) =>
        data.forEach((e) => {
          if (e.id === quizID) {
            return setQuizQuestions(e);
          } else {
            return;
          }
        })
      );
  };

  return (
    <div className="takeQuizContent">
      <TakeQuizButtons />
      <TakeQuizQuestion questionNumber={questionNumber} clickHandler={clickHandler} quizQuestions={quizQuestions} />
      <TakeQuizCount
        questionNumber={questionNumber}
        quizQuestions={quizQuestions}
      />
    </div>
  );
}

export default TakeQuiz;
