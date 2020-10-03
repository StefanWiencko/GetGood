import React,{useState} from 'react'
import NewQuizScrolTitle from './NewQuizScrolTitle'
import NewQuizScrolCount from './NewQuizScrolCount'
import NewQuizScrolElements from './NewQuizScrolElements'
import '../scss/_NewQuizScrolbar.scss'

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
            <div className='expand' onClick={toggleIsActive} className={isActive ? 'isActive expand' : 'expand'}></div>
        </div>
    )
}

export default NewQuizScrolbar
