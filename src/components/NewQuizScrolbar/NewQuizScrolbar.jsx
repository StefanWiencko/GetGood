import React,{useState} from 'react'
import NewQuizScrolTitle from '../NewQuizScrolTitle/NewQuizScrolTitle'
import NewQuizScrolCount from '../NewQuizScrolCount/NewQuizScrolCount'
import NewQuizScrolElements from '../NewQuizScrolElements/NewQuizScrolElements'
import "../../scss/_Main.scss";

function NewQuizScrolbar({quizData}) {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive =() =>{
        setIsActive(!isActive)
    }
    return (
        <div className={isActive ? "newQuizScrolbar isActive" : 'newQuizScrolbar'}>
            <NewQuizScrolTitle/>
            <NewQuizScrolElements quizData={quizData}/>
            <NewQuizScrolCount quizData={quizData}/>
            <div onClick={toggleIsActive} className={isActive ? 'isActive expand' : 'expand'}></div>
        </div>
    )
}

export default NewQuizScrolbar
