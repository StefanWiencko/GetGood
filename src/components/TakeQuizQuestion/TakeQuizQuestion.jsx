import React from "react";
import "../../scss/_Main.scss";

function TakeQuizQuestion({ quizQuestions,clickHandler,questionNumber }) {
    
  return (
    <div className="takeQuizQuestion">
      {quizQuestions && (
        <p className="takeQuizQuestionContent">
          {quizQuestions.questions[questionNumber][0].content}
        </p>
      )}
      {quizQuestions && (
        <div className="takeQuizAnswers">
          <button onClick={clickHandler} data-correct={quizQuestions.questions[questionNumber][0].answers[0].correct} className="takeQuizAnswer">{quizQuestions.questions[questionNumber][0].answers[0].content}</button>
          <button onClick={clickHandler} data-correct={quizQuestions.questions[questionNumber][0].answers[1].correct} className="takeQuizAnswer">{quizQuestions.questions[questionNumber][0].answers[1].content}</button>
          <button onClick={clickHandler} data-correct={quizQuestions.questions[questionNumber][0].answers[2].correct} className="takeQuizAnswer">{quizQuestions.questions[questionNumber][0].answers[2].content}</button>
          <button onClick={clickHandler} data-correct={quizQuestions.questions[questionNumber][0].answers[3].correct} className="takeQuizAnswer">{quizQuestions.questions[questionNumber][0].answers[3].content}</button>
        </div>
      )}
    </div>
  );
}

export default TakeQuizQuestion;
