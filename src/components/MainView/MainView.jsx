import React, { useState, useEffect } from "react";
import "../../scss/_Main.scss";
import LandingPage from "../LandingPage/LandingPage";
import NewQuiz from "../NewQuiz/NewQuiz";
import TakeQuiz from "../TakeQuiz/TakeQuiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function MainView() {
  useEffect(() => {
    fetchAllQuizes();
  }, []);

  const [quizQuestions, setQuizQuestions] = useState();
  const [correctCounter, setCorrectCounter] = useState(0);

  const fetchAllQuizes = (quizID) => {
    fetch("http://localhost:4000/quizzes")
      .then((resp) => resp.json())
      .then((data) => {
        const currentQuiz = data.find((item) => item.id == quizID);
        setQuizQuestions(currentQuiz);
      });
  };

  const correctCounterHandler = (event) => {
    if (event.target.dataset.correct === "true") {
      setCorrectCounter((prev) => prev + 1);
    }
  };
  const chooseQuizHandler = (event) => {
    fetchAllQuizes(event.target.id);
  };
  return (
    <Router>
      <div className="appBody">
        <header className="header">
          <div className="logo">GetGood</div>
        </header>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <LandingPage chooseQuizHandler={chooseQuizHandler} />}
          />
          <Route path="/newquiz" component={NewQuiz} />
          <Route
            path="/takequiz"
            render={() => (
              <TakeQuiz
                setCorrectCounter={setCorrectCounter}
                correctCounterHandler={correctCounterHandler}
                correctCounter={correctCounter}
                quizQuestions={quizQuestions}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default MainView;
