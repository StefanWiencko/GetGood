import React,{useEffect,useState} from 'react'
import '../scss/_FirstPageScrolElements.scss'

function FirstPageScrolElements({quizData}) {
    const [allQuizes, setAllQuizes] = useState([]);

    useEffect(() => {
      fetchAllQuizes();
    }, []);
  
    console.log(allQuizes);
  
    const fetchAllQuizes = () => {
      fetch("http://localhost:4000/quizs")
        .then((resp) => resp.json())
        .then((data) => setAllQuizes(data));
    };
    return (
        <div className='firstPageScrolElements'>
            {allQuizes.map(e => <div key={e.id} className ='firstPageScrolElement'>{e.name}</div>)}
        </div>
    )
}

export default FirstPageScrolElements
