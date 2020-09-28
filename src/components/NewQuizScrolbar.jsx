import React from 'react'
import NewQuizScrolTitle from './NewQuizScrolTitle'
import NewQuizScrolCount from './NewQuizScrolCount'
import NewQuizScrolElements from './NewQuizScrolElements'
import '../scss/_NewQuizScrolbar.scss'

function NewQuizScrolbar({quizData}) {
    return (
        <div className='newQuizScrolbar'>
            <NewQuizScrolTitle/>
            <NewQuizScrolElements quizData={quizData}/>
            <NewQuizScrolCount quizData={quizData}/>
        </div>
    )
}

export default NewQuizScrolbar
