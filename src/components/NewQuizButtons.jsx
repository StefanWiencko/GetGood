import React from 'react'
import NewQuizButton from './NewQuizButton'
import '../scss/_NewQuizButtons.scss'

function AddQuizButtons({newQuestionHandler, quizSubmit}) {
    return (
        <div className='buttonsBar'>
            <NewQuizButton clickHandler={newQuestionHandler}/>
            <NewQuizButton clickHandler={quizSubmit}/>
            <NewQuizButton/>
        </div>
    )
}

export default AddQuizButtons
