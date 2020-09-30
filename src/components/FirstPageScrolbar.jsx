import React from 'react'
import FirstPageScrolTitle from './FirstPageScrolTitle'
import FirstPageScrolCount from './FirstPageScrolCount'
import FirstPageScrolElements from './FirstPageScrolElements'
import '../scss/_FirstPageScrolbar.scss'

function FirstPageScrolbar() {
    return (
        <div className='firstPageScrolbar'>
            <FirstPageScrolTitle/>
            <FirstPageScrolElements />
            <FirstPageScrolCount />
        </div>
    )
}

export default FirstPageScrolbar
