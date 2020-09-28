import React from 'react'
import '../scss/_NewQuizScrolCount.scss'

function NewQuizScrolCount({quizData}) {
    return (
        <div className='newQuizScrolCount'>
            Liczba pytań: {quizData.length}
        </div>
    )
}

export default NewQuizScrolCount
