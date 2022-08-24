import { Component, useEffect, useState } from 'react';
import './card.css'
import charizard from './charizard.png'


const Card = (props) => {





return(

    <div className='cardcontainer' onClick={props.clickMove} id={props.title} >
        <div className='imagecontainer'>{props.title}</div>
        <img className='namecontainer'   src={charizard}></img>


    </div>


)



}

export default Card;