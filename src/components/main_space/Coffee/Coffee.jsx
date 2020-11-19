import React,{useState}  from 'react'
import './Coffee.css'
import Map from '../Map/Map'

const Coffee =({stateNav})=>{

    const hide = ()=>{
        stateNav({
            Map: false,
        })
    }
    const buttonesc = (<div className='buttonesc'><button onClick={hide} >X</button></div>)



    return(
        <div className="main_body_block">
        {buttonesc}
        <h1>Coffee</h1>
    
</div>
    )
}

export default Coffee;