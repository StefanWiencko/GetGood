import React, { useState } from "react";
import "../../scss/_Main.scss";
import NewQuizButtons from "../NewQuizButtons/NewQuizButtons";
import NewQuizinput from "../NewQuizInput/NewQuizInput";
import NewQuizScrolbar from "../NewQuizScrolbar/NewQuizScrolbar";

function NewQuiz() {
  const [elementData, setElementData] = useState({
    title: "",
    question: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const [quizData, setQuizData] = useState([]);

  let apiObject;

  if (quizData.length > 0) {
    apiObject = {
      name: quizData[0].title,
      questions: quizData.map((e) => [
        {
          content: e.question,
          answers: [
            {
              content: e.correctAnswer,
              correct: true,
            },
            {
              content: e.answer1,
              correct: false,
            },
            {
              content: e.answer2,
              correct: false,
            },
            {
              content: e.answer3,
              correct: false,
            },
          ],
        },
      ]),
    };
  }

  const quizSubmit = () => {
    if (
      elementData.title === "" &&
      elementData.question === "" &&
      elementData.correctAnswer === "" &&
      elementData.answer1 === "" &&
      elementData.answer2 === "" &&
      elementData.answer3 === ""
    ) {
      return alert("Wypełnij puste pola");
    }
    setQuizData((prev) => [...prev, elementData]);
    fetch(`http://localhost:4000/quizs`, {
      method: "POST",
      body: JSON.stringify(apiObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setElementData((prev) => ({ ...prev, [name]: value }));
  };

  const newQuestionHandler = () => {
    if (
      elementData.title === "" &&
      elementData.question === "" &&
      elementData.correctAnswer === "" &&
      elementData.answer1 === "" &&
      elementData.answer2 === "" &&
      elementData.answer3 === ""
    ) {
      return alert("Wypełnij puste pola");
    }
    setQuizData((prev) => [...prev, elementData]);
    setElementData({
      title: "",
      question: "",
      correctAnswer: "",
      answer1: "",
      answer2: "",
      answer3: "",
    });
  };
  return (
    <div className="newQuizContent">
      <NewQuizButtons
        quizSubmit={quizSubmit}
        newQuestionHandler={newQuestionHandler}
      />
      <NewQuizinput
        quizData={quizData}
        elementData={elementData}
        changeHandler={changeHandler}
      />
      <NewQuizScrolbar quizData={quizData} />
    </div>
  );
}

export default NewQuiz;
