import React from 'react'
import './sponsors.css'
import AscasoLogo from '../../img/logoAscaso.png'
import HarioLogo from '../../img/logoHario.png'
import FiorLogo from '../../img/logoFiorenzato.png'

const SponsorsPage =()=>{


    return(
        <div className="sponsors_body">
                <div className="ascaso_logo">
                    <img src={AscasoLogo} alt=""/>
                </div>
                <div className="hario_logo">
                    <img src={HarioLogo} alt=""/>
                </div>
                <div className="fior_logo">
                    <img src={FiorLogo} alt=""/>
                </div>
        </div>
    )
}

export default SponsorsPage;