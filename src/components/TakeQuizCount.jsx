import React from 'react'
import '../scss/_TakeQuizCount.scss'

function TakeQuizCount({quizQuestions,questionNumber}) {

    return (
        <div className='takeQuizCount'>
            {questionNumber + 1}  /  {quizQuestions.questions.length}
        </div>
    )
}

export default TakeQuizCount
