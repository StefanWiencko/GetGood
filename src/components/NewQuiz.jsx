import React from 'react'
import '../scss/_NewQuiz.scss'
import NewQuizButtons from './NewQuizButtons'
import NewQuizinput from './NewQuizInput';
import NewQuizScrolbar from './NewQuizScrolbar';

function NewQuiz() {
    return (
        <div className='newQuizContent'>
            <NewQuizButtons/>
            <NewQuizinput/>
            <NewQuizScrolbar/>
        </div>
    )
}

export default NewQuiz
