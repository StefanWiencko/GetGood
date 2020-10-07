import React, { useState} from "react";
import "../scss/_Main.scss";
import FirstPage from "./FirstPage";
import NewQuiz from "./NewQuiz";
import TakeQuiz from "./TakeQuiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function MainView() {
  const [quizQuestions, setQuizQuestions] = useState();
  const [quizID, setQuizID] = useState(3);
  const [correctCounter, setCorrectCounter] = useState(0);

  let fetchAllQuizes = () => {
    fetch("http://localhost:4000/quizs")
      .then((resp) => resp.json())
      .then((data) =>
        data.forEach((e) => {
          if (e.id === quizID) {
            setQuizQuestions(e);
          }
        })
      );
  };
  const correctCounterHandler = (e) => {
    if (e.target.dataset.correct === "true") {
      setCorrectCounter((prev) => prev + 1);
    }
  };
  const chooseQuizHandler = (e) => {
    setQuizID(e.target.id);
    fetchAllQuizes()

  };
  // console.log(quizQuestions)
  return (
    <Router>
      <div className="appBody">
        <header className="header">
          <div className="logo" >
            GetGood
          </div>
        </header>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <FirstPage chooseQuizHandler={chooseQuizHandler} />}
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
