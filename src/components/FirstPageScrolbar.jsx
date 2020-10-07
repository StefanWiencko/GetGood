import React,{useState} from 'react'
import FirstPageScrolTitle from './FirstPageScrolTitle'
import FirstPageScrolCount from './FirstPageScrolCount'
import FirstPageScrolElements from './FirstPageScrolElements'
import "../scss/_Main.scss";

function FirstPageScrolbar({allQuizes, chooseQuizHandler,fetchQuizHandler}) {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive =() =>{
        setIsActive(!isActive)
    }
    return (
        <div className={isActive ? 'firstPageScrolbar isActive' : "firstPageScrolbar"} >
            <FirstPageScrolTitle/>
            <FirstPageScrolElements chooseQuizHandler={chooseQuizHandler} allQuizes={allQuizes} fetchQuizHandler={fetchQuizHandler}/>
            <FirstPageScrolCount allQuizes={allQuizes}/>
            <div onClick={toggleIsActive} className={isActive ? 'isActiveExpand expand' : 'expand'}></div>
        </div>
    )
}

export default FirstPageScrolbar
