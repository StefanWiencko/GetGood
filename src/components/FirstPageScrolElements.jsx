import React from 'react'
import '../scss/_FirstPageScrolElements.scss'

function FirstPageScrolElements({allQuizes}) {
    return (
        <div className='firstPageScrolElements'>
            {allQuizes.map(e => <div key={e.id} className ='firstPageScrolElement'>{e.name}</div>)}
        </div>
    )
}

export default FirstPageScrolElements
