import React,{useState}  from 'react'
import './Coffee.css'
import Map from '../Map/Map'
import coffeePack from '../Coffee/coffeePack.png'

const Coffee =({stateNav})=>{

    const hide = ()=>{
        stateNav({
            Map: false,
        })
    }
    const buttonesc = (<div className='buttonesc'><button onClick={hide} >.</button></div>)

    
    const coffeeElement =(name,region,taste,sour,sweet,bitterly)=>{

        return(
           
            <div className="coffee_body_start">
                        
                    <div className="coffee_header">
                            <img src={coffeePack} alt="coffee"/>
                    </div>
                    <div className="coffee_footer">
                        <ul>
       <li><p className='region_coffee' >{name}   {region}</p></li>
                    <span className='coffee_region_span' >{taste}</span>
                            
                        </ul>
                            <div className="coffee_footer_none">
                                    <ul className='tastes' >
        <li>Кислотность:  {sour}</li>
        <li>Сладость:  {sweet}</li>
        <li>Горечь:  {bitterly}</li>
                                    </ul>
                                    <p>А по поводу вкусного рецепта для приготовления кофе дома - можно спросить у бариста </p>
                            </div>
                    </div>
            </div>

        )
    }

    return(
        <div className="main_body_block">
        {buttonesc}
                <div className="coffee_text">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut soluta nobis mollitia, eius nihil!</p>
                </div>
                <div className="coffee_main">
                        {coffeeElement('Columbia','Huila','Яблоко,Тирамису,Слива','•••○○','•••••','•○○○○')}
                        {coffeeElement('Ethiopia','Sidamo GR.2','Мёд,Помело,Гранат','***','***','*')}
                        {coffeeElement('Brazilia','Serrada','Лалала,Лалала,Лалала','****','***','*****')}
                        {coffeeElement('Guatemala','Jaguar','Яблоко,Апельсин,Персик','***','****','*')}
                        {coffeeElement('Columbia','Huila','Яблоко,Тирамису,Слива','•••○○','•••••','•○○○○')}
                        
                        </div>
</div>
    )
}

export default Coffee;