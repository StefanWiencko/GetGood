import React, { useState} from "react";
import "../scss/_MainView.scss";
import FirstPage from "./FirstPage";
import NewQuiz from "./NewQuiz";
import TakeQuiz from "./TakeQuiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function MainView() {

  const [quizID, setQuizID] = useState(2);
  const [correctCounter, setCorrectCounter] = useState(0);

  const correctCounterHandler = (e) => {
    if (e.target.dataset.correct === "true") {
      setCorrectCounter((prev) => prev + 1);
    }
  };
  const chooseQuizHandler = (e) => {
    setQuizID(e.target.id);
  };

  return (
    <Router>
      <div className="appBody">
        <header className="header">
          <div className="logo" />
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
                quizID={quizID}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default MainView;
