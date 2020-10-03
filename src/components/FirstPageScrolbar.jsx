import React,{useState} from 'react'
import FirstPageScrolTitle from './FirstPageScrolTitle'
import FirstPageScrolCount from './FirstPageScrolCount'
import FirstPageScrolElements from './FirstPageScrolElements'
import '../scss/_FirstPageScrolbar.scss'

function FirstPageScrolbar({allQuizes}) {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive =() =>{
        setIsActive(!isActive)
    }
    return (
        <div className={isActive ? 'firstPageScrolbar isActive' : "firstPageScrolbar"} >
            <FirstPageScrolTitle/>
            <FirstPageScrolElements allQuizes={allQuizes}/>
            <FirstPageScrolCount allQuizes={allQuizes}/>
            <div on className='expand' onClick={toggleIsActive} className={isActive ? 'isActiveExpand expand' : 'expand'}></div>
        </div>
    )
}

export default FirstPageScrolbar
