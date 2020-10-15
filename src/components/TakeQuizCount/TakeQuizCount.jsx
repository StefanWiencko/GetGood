import React from 'react'
import "../../scss/_Main.scss";

function TakeQuizCount({quizQuestions,questionNumber}) {
    return (
        <div className='takeQuizCount'>
            {questionNumber + 1}  /  {quizQuestions && quizQuestions.questions.length}
        </div>
    )
}

export default TakeQuizCount
