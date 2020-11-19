import React,{useState}  from 'react'
import './Text.css'

const Text =({stateNav})=>{

    const hide = ()=>{
        stateNav({
            Text: false,
        })
    }
    const buttonesc = (<div className='buttonesc'><button onClick={hide} >X</button></div>)



    return(
        <div className="main_body_block">
        {buttonesc}
        <h1>Text</h1>
    
</div>
    )
}

export default Text;