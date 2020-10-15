import React,{useState} from 'react'
import LandingPageScrolTitle from '../LandingPageScrolTitle/LandingPageScrolTitle'
import LandingPageScrolCount from '../LandingPageScrolCount/LandingPageScrolCount'
import LandingPageScrolElements from '../LandingPageScrolElements/LandingPageScrolElements'
import "../../scss/_Main.scss";

function LandingPageScrolbar({allQuizes, chooseQuizHandler,fetchQuizHandler}) {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive =() =>{
        setIsActive(!isActive)
    }
    return (
        <div className={isActive ? 'landingPageScrolbar isActive' : "landingPageScrolbar"} >
            <LandingPageScrolTitle/>
            <LandingPageScrolElements chooseQuizHandler={chooseQuizHandler} allQuizes={allQuizes} fetchQuizHandler={fetchQuizHandler}/>
            <LandingPageScrolCount allQuizes={allQuizes}/>
            <div onClick={toggleIsActive} className={isActive ? 'isActiveExpand expand' : 'expand'}></div>
        </div>
    )
}

export default LandingPageScrolbar
