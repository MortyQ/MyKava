import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'


const Header =()=>{

    return (
            <header>

        <div className="header_main">
                <div className="logo">
                    <img className='logo_img'  src={logo} alt="logo"/>
                </div>
                <div className="logo_text">
                    <content>
                         <h1 className='coffee_heart' >Кофе желают наши сердца </h1>
                         <h2 className='coffee_togo_text' >Правильный кофе с собой</h2> 
                    </content>
                    <content>  <p className='coffee_text_main' >
                        Мы кофейня на 23 августа.Готовим правильный кофе на 100% арабике. <br />
                        У нас можно посидеть за чашкой кофе, либо взять кофе с собой <br />
                            А еще вы можете приобрести у нас кофе в зерне
                        
                    </p> </content>
                    <div  id='menu_yak' className="button">
                        <button> <a href="#nav"> Узнать подробнее </a> </button>
                    </div>
                </div>
        </div>
            </header>
    )
}

export default Header;