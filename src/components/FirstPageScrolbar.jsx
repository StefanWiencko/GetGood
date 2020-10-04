import React,{useState} from 'react'
import FirstPageScrolTitle from './FirstPageScrolTitle'
import FirstPageScrolCount from './FirstPageScrolCount'
import FirstPageScrolElements from './FirstPageScrolElements'
import '../scss/_FirstPageScrolbar.scss'

function FirstPageScrolbar({allQuizes, chooseQuizHandler}) {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive =() =>{
        setIsActive(!isActive)
    }
    return (
        <div className={isActive ? 'firstPageScrolbar isActive' : "firstPageScrolbar"} >
            <FirstPageScrolTitle/>
            <FirstPageScrolElements chooseQuizHandler={chooseQuizHandler} allQuizes={allQuizes}/>
            <FirstPageScrolCount allQuizes={allQuizes}/>
            <div onClick={toggleIsActive} className={isActive ? 'isActiveExpand expand' : 'expand'}></div>
        </div>
    )
}

export default FirstPageScrolbar
