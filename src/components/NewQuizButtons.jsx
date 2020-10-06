import React from 'react'
import NewQuizButton from './NewQuizButton'
import '../scss/_NewQuizButtons.scss'
import {Link} from 'react-router-dom'

function AddQuizButtons({newQuestionHandler, quizSubmit}) {
    const buttonStyle ={
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'saddlebrown',
        border: '1px, solid ,springgreen',
        margin: '5px'
    }
    

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
