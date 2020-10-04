import React,{useState} from "react";
import "../scss/_MainView.scss";
// import FirstPage from "./FirstPage";
// import NewQuiz from './NewQuiz'
import TakeQuiz from './TakeQuiz'

function MainView() {
  const [quizID, setQuizID] = useState(1)
  
  const chooseQuizHandler = (e) =>{
    setQuizID(e.target.id)
  }

  return (
    <div className="appBody">
      <header className="header">
        <div className="logo" />
      </header>
      {/* <NewQuiz /> */}
      {/* <FirstPage chooseQuizHandler={chooseQuizHandler}/> */}
      <TakeQuiz quizID={quizID}/>
    </div>
  );
}

export default MainView;
