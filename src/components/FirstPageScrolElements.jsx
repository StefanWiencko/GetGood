import React from 'react'
import '../scss/_FirstPageScrolElements.scss'

function FirstPageScrolElements({allQuizes, chooseQuizHandler}) {
    return (
        <div className='firstPageScrolElements'>
            {allQuizes.map(e => <div key={e.id} id={e.id} onClick={chooseQuizHandler} className ='firstPageScrolElement'>{e.name}</div>)}
        </div>
    )
}

export default FirstPageScrolElements
