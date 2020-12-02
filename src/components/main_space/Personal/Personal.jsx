import React,{useState}  from 'react'
import './Personal.css'

const Personal =({stateNav})=>{

    const hide = ()=>{
        stateNav({
            Personal: false,
        })
    }
    const buttonesc = (<div className='buttonesc'><button onClick={hide} >.</button></div>)



    return(
        <div className="main_body_block">
        {buttonesc}
        <h1>Personal</h1>
    
</div>
    )
}

export default Personal;