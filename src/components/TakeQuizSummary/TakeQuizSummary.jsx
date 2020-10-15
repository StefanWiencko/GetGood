import React from 'react'
import "../../scss/_Main.scss";
function TakeQuizSummary({correctCounter, quizQuestions}) {
    return (
        <div className='takeQuizSummary'>
            Uzyskałeś {correctCounter} poprawnych odpowiedzi na {quizQuestions.questions.length} pytań !
        </div>
    )
}

export default TakeQuizSummary
