import React from 'react'
import TakeQuizButton from './TakeQuizButton'
import '../scss/_TakeQuizButtons.scss'

function TakeQuizButtons() {
    return (
        <div className='buttonsBar'>
            <TakeQuizButton />
            <TakeQuizButton />
        </div>
    )
}

export default TakeQuizButtons
