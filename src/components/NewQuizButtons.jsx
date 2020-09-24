import React from 'react'
import NewQuizButton from './NewQuizButton'
import '../scss/_NewQuizButtons.scss'

function AddQuizButtons() {
    return (
        <div className='buttonsBar'>
            <NewQuizButton/>
            <NewQuizButton/>
            <NewQuizButton/>
        </div>
    )
}

export default AddQuizButtons
