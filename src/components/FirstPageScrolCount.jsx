import React from 'react'
import '../scss/_FirstPageScrolCount.scss'

function FirstPageScrolCount({allQuizes}) {
    return (
        <div className='firstPageScrolCount'>
            Ilość quizów: {allQuizes.length}
        </div>
    )
}

export default FirstPageScrolCount
