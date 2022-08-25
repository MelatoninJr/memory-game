import { Component, useEffect, useState } from 'react';
import './card.css'
import charizard from './charizard.png'
import gengar from './gengar.png'
import pikachu from './pikachu.png'
import starmie from './starmie.png'
import charmander from './charmander.png'
import charmeleon from './charmeleon.png'
import mew from './mew.png'
import mewtwo from './mewtwo.png'
import muk from './muk.png'
import ninetails from './ninetails.png'
import ghastly from './ghastly.png'
import mrmime from './mrmime.png'
import blastoise from './blastoise.png'
import squirtle from './squirtle.png'
import lugia from './lugia.png'

const Card = (props) => {

let sourcer = ''
if(props.imagesource === './gengar.png') {
    sourcer=gengar
}
if(props.imagesource === './pikachu.png') {
    sourcer=pikachu
}
if(props.imagesource === './starmie.png') {
    sourcer=starmie
}
if(props.imagesource === './charmander.png') {
    sourcer=charmander
}
if(props.imagesource === './charmeleon.png') {
    sourcer=charmeleon
}
if(props.imagesource === './mew.png') {
    sourcer=mew
}
if(props.imagesource === './mewtwo.png') {
    sourcer=mewtwo
}
if(props.imagesource === './muk.png') {
    sourcer=muk
}
if(props.imagesource === './ninetails.png') {
    sourcer=ninetails
}
if(props.imagesource === './ghastly.png') {
    sourcer=ghastly
}
if(props.imagesource === './mrmime.png') {
    sourcer=mrmime
}
if(props.imagesource === './squirtle.png') {
    sourcer=squirtle
}
if(props.imagesource === './lugia.png') {
    sourcer=lugia
}
if(props.imagesource === './blastoise.png') {
    sourcer=blastoise
}
if(props.imagesource === './charizard.png') {
    sourcer=charizard
}


return(

    <div className='cardcontainer' onClick={props.clickMove} id={props.title} >
        <div className='imagecontainer'>{props.title}</div>
        <img className='namecontainer'   src={sourcer}></img>


    </div>


)



}

export default Card;

