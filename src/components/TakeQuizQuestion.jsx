import React from 'react'
import '../scss/_TakeQuizQuestion.scss'

function TakeQuizQuestion({quizQuestions}) {
    console.log(quizQuestions.questions[0][0].content)
    return (
        <div className='takeQuizQuestion'>
            <p className='takeQuizQuestionContent'>{quizQuestions.questions[0][0].content && quizQuestions.questions[0][0].content == undefined}</p>
            <form  className='takeQuizAnswers'>
                <button className='takeQuizAnswer'>quizQuestions.question</button>
                <button className='takeQuizAnswer'>Odpowiedz 2</button>
                <button className='takeQuizAnswer'>Odpowiedz 3</button>
                <button className='takeQuizAnswer'>Odpowiedz 4</button>
            </form>
        </div>
    )
}

export default TakeQuizQuestion
