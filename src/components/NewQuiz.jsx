import React, { useState } from "react";
import "../scss/_NewQuiz.scss";
import NewQuizButtons from "./NewQuizButtons";
import NewQuizinput from "./NewQuizInput";
import NewQuizScrolbar from "./NewQuizScrolbar";

function NewQuiz() {
  const [elementData, setElementData] = useState({
    title: "",
    question: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const [submit, setSubmit] = useState();

  const [quizData, setQuizData] = useState([]);

  //   const API = "http://localhost:3000";

  //   fetch(`${API}/db`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  const quizSubmit = () => {
    setSubmit( ()=> ({
      name: "Biologia - Anatomia",
      questions: [
        {
          content: elementData.question,
          answers: [
            {
              content: elementData.correctAnswer,
              correct: true,
            },
            {
              content: elementData.answer1,
              correct: false,
            },
            {
              content: elementData.answer2,
              correct: false,
            },
            {
              content: elementData.answer3,
              correct: false,
            }
          ],
        },
      ],
    }))
    fetch(`http://localhost:4000/quizs`, {
      method: "POST",
      body: JSON.stringify(submit),
      headers: {
        "Content-Type": "application/json",
      }
    });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setElementData((prev) => ({ ...prev, [name]: value }));
  };

  const newQuestionHandler = () => {
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
      <NewQuizButtons  quizSubmit={quizSubmit} newQuestionHandler={newQuestionHandler} />
      <NewQuizinput elementData={elementData} changeHandler={changeHandler} />
      <NewQuizScrolbar  quizData={quizData} />
    </div>
  );
}

export default NewQuiz;
