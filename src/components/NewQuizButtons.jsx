import React from 'react'
import '../scss/_NewQuizButtons.scss'
import {Link} from 'react-router-dom'

function AddQuizButtons({newQuestionHandler, quizSubmit}) {
    return (
        <div className='newQuizButtons'>
            <div onClick={newQuestionHandler} className='quizButton'>Dodaj Pytanie</div>
            <div onClick={quizSubmit} className='quizButton'>Zapisz Quiz</div>
            <Link to='/' className='quizButton'>
            <div>Wyjdź</div>
            </Link>
        </div>
    )
}

export default AddQuizButtons
