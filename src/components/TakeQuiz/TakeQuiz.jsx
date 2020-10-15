import React, { useState} from "react";
import "../../scss/_Main.scss";
import TakeQuizQuestion from "../TakeQuizQuestion/TakeQuizQuestion";
import TakeQuizButtons from "../TakeQuizButtons/TakeQuizButtons";
import TakeQuizCount from "../TakeQuizCount/TakeQuizCount";
import TakeQuizSummary from "../TakeQuizSummary/TakeQuizSummary";

function TakeQuiz({
  correctCounterHandler,
  setCorrectCounter,
  correctCounter,
  quizQuestions
}) {
  const [questionNumber, setQuestionNumber] = useState(0);

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
    obj.questions.forEach((arr) => shuffle(arr[0].answers));
  };

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
