import React from 'react'
import '../scss/_NewQuizInput.scss'

function NewQuizInput() {
    return (
        <form className='newQuizForm'>
            <label>
                Tytuł:
                <input type="text" name='title'/>
            </label>
            <label>
                Treść pytania:
                <input type="text" name='question'/>
            </label>
            <label>
                Poprawna odpowiedź:
                <input type="text" name='correctAnswer'/>
            </label>
            <label>
                Pierwsza odpowiedź:
                <input type="text" name='answer1'/>
            </label>
            <label>
                Druga odpowiedź:
                <input type="text" name='answer1'/>
            </label>
            <label>
                Trzecia odpowiedź:
                <input type="text" name='answer1'/>
            </label>
        </form>
    )
}

export default NewQuizInput
