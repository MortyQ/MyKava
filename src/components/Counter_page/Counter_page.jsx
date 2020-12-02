import React,{useState} from 'react'
import './counter.css'
import CupsImg from '../../img/cups.png'
import DotsImg from '../../img/dots.png'
import GuestsImg from '../../img/guests.png'
import PostsImg from '../../img/posts.png'
import SubsImg from '../../img/subs.png'




const CounterPage =()=>{

    const [state, setState] =useState({
    counter: 525
});



const counter_el =(img,numb,text)=> {
    
const counter_plus =()=>{

    setState({
                counter: numb + 1
            });  
   }
   const counter_minus =()=>{

    
    
       setState({
           counter: numb - 1
       }); 

   }
    
    return(
        <div className="counter">
                        <img src={img} alt=""/>
                        <div className="button_counter">
                        <button onClick={counter_plus} >+</button>
                        <button onClick={counter_minus} >-</button>
                        </div>
                    <span className='counter_numbers'>{state.counter}</span>
                    <p>{text}</p>
                </div>

    )
}










    return(
        <div className="counter_body">
                    {counter_el(CupsImg, 25 ,'Довольные')}
                    {counter_el(DotsImg,11 ,'Довольные')}
                    {counter_el(GuestsImg,888 ,'Довольные')}
                    {counter_el(PostsImg,325 ,'Довольные')}
                    {counter_el(SubsImg,417 ,'Довольные')}
        </div>
    )
}

export default CounterPage;