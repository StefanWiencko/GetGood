import React from 'react'
import '../scss/_TakeQuizButton.scss'

function TakeQuizButton({clickHandler}) {
    return (
        <div onClick={clickHandler} className='quizButton'>
            
        </div>
    )
}

export default TakeQuizButton
