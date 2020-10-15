import React from 'react'
import "../../scss/_Main.scss";

function LandingPageScrolCount({allQuizes}) {
    return (
        <div className='landingPageScrolCount'>
            Ilość quizów: {allQuizes.length}
        </div>
    )
}

export default LandingPageScrolCount
