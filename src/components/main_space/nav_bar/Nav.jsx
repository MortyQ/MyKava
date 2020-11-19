import React,{useState} from 'react'
import './Nav.css'
import Map from '../Map/Map'
import Coffee from '../Coffee/Coffee'
import Text from '../Text/Text'
import Personal from '../Personal/Personal'

const Nav =()=>{

    
    const [state, setState] =useState({
            Map: true,
            Coffee: false,
            Personal: false,
            Text: false,
    });

    const  openMap =()=>{
        setState({
            Map: true,
            Coffee: false,
            Personal: false,
            Text: false,
        })
}
    const  openCoffee =()=>{
        setState({
            Map: false,
            Coffee: true,
            Personal: false,
            Text: false,
        })
}

const  openPersonal =()=>{
    setState({
        Map: false,
        Coffee: false,
        Personal: true,
        Text: false,
    })
}
const  openText =()=>{
    setState({
        Map: false,
        Coffee: false,
        Personal: false,
        Text: true,
    })
}





    return (
        <div  id='nav' className="navigation">
            <nav>
                {/* eslint-disable-next-line*/}
                <div className='div_button'><button  onClick={openMap} >Наша кофейня</button> </div>
                <div className='div_button'><button onClick={openCoffee} >Кофе</button></div>
                <div className='div_button'><button onClick={openPersonal} >Персонал</button></div>
                <div className='div_button'><button  onClick={openText} >Статьи </button></div>
                {state.Map&& <Map stateNav={setState} />}
                {state.Coffee&& <Coffee stateNav={setState} />}
                {state.Text&& <Text stateNav={setState} />}
                {state.Personal&& <Personal stateNav={setState} />}
            </nav>
        </div>
    )
}

export default Nav;