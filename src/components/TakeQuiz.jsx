import React, { useState, useEffect } from "react";
import "../scss/_TakeQuiz.scss";
import TakeQuizQuestion from "./TakeQuizQuestion";
import TakeQuizButtons from "./TakeQuizButtons";
import TakeQuizCount from "./TakeQuizCount";

function TakeQuiz({ quizID }) {
  useEffect(() => {
    fetchAllQuizes();
  }, []);

  const [quizQuestions, setQuizQuestions] = useState({
    name: "aaa",
    questions: [
      [
        {
          content: "aa",
          answers: [
            {
              content: "1",
              correct: true,
            },
            {
              content: "2",
              correct: false,
            },
            {
              content: "3",
              correct: false,
            },
            {
              content: "4",
              correct: false,
            },
          ],
        },
      ],
    ],
  });
  
  const [questionNumber, setQuestionNumber] = useState(0);

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
      <TakeQuizQuestion quizQuestions={quizQuestions} />
      <TakeQuizCount
        questionNumber={questionNumber}
        quizQuestions={quizQuestions}
      />
    </div>
  );
}

export default TakeQuiz;
