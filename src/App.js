
import { Component, useEffect, useState } from 'react';
import './App.css';
import Card from './components/card'
import { v4 as uuidv4 } from 'uuid';

function App() {
const [cardArray, setCardArray] = useState([
{name: 'charmander', image: "'./charmander.png'", id:uuidv4()},
{name: 'charmeleon', image: './charmeleon.png', id:uuidv4()},
{name: 'charizard', image: './charizard.png', id:uuidv4()},
{name: 'mew', image: './mew.png', id:uuidv4()},
{name: 'mewtwo', image: './mewtwo.png', id:uuidv4()},
{name: 'pikachu', image: './pikachu.png', id:uuidv4()},
{name: 'muk', image: './muk.png', id:uuidv4()},
{name: 'ninetails', image: './ninetails.png', id:uuidv4()},
{name: 'ghastly', image: './ghastly.png', id:uuidv4()},
{name: 'gengar', image: './gengar.png', id:uuidv4()},
{name: 'mrmime', image: './mrmime.png', id:uuidv4()},
{name: 'starmie', image: './starmie.png', id:uuidv4()},
{name: 'squirtle', image: './squirtle.png', id:uuidv4()},
{name: 'blastoise', image: './blastoise.png', id:uuidv4()},
{name: 'lugia', image: './lugia.png', id:uuidv4()},

])
const [selectArray, setSelectArray] = useState(['charmander'])
const [randomArray, setRandomArray] = useState([])
const [counter, setCounter] = useState(0)




const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const shifter = (e) => {
  let number1 = cardArray.length 
  let number2 = getRandomInt(number1)



  if(cardArray.length === 0) {
    return
  }


  setRandomArray([...randomArray, cardArray[number2]])
  randomArray.push(cardArray[number2])
  cardArray.splice(number2, 1)
  
}


const incriment = (e) => {
  setCounter(counter + 1)
}
/*
useEffect(() => {
  for(let i = 0; i < 16; i++) {

    //shifter()
  }
})*/

for(let i = 0; i < 16; i++) {
  shifter()
}

const clickMove = (e) => {
  let nameevent = e.target
  console.log(selectArray)
  const isBelowThreshold = (currentValue) => (currentValue !== e.target.id)


 










  for(let i =0; i < 16; i++) {
    shifter()
  }


    if(selectArray.every(isBelowThreshold) === false) {
      setCounter(0)
      console.log('You lose')
      
      
    } else if(selectArray.every(isBelowThreshold) === true){     

          selectArray.push(nameevent.getAttribute('id'))
          setCounter(counter + 1)
          console.log('You dont lose')
 
    }

    setCardArray([
      
    {name: 'charmander', image: "'./charmander.png'", id:uuidv4()},
    {name: 'charmeleon', image: './charmeleon.png', id:uuidv4()},
    {name: 'charizard', image: './charizard.png', id:uuidv4()},
    {name: 'mew', image: './mew.png', id:uuidv4()},
    {name: 'mewtwo', image: './mewtwo.png', id:uuidv4()},
    {name: 'pikachu', image: './pikachu.png', id:uuidv4()},
    {name: 'muk', image: './muk.png', id:uuidv4()},
    {name: 'ninetails', image: './ninetails.png', id:uuidv4()},
    {name: 'ghastly', image: './ghastly.png', id:uuidv4()},
    {name: 'gengar', image: './gengar.png', id:uuidv4()},
    {name: 'mrmime', image: './mrmime.png', id:uuidv4()},
    {name: 'starmie', image: './starmie.png', id:uuidv4()},
    {name: 'squirtle', image: './squirtle.png', id:uuidv4()},
    {name: 'blastoise', image: './blastoise.png', id:uuidv4()},
    {name: 'lugia', image: './lugia.png', id:uuidv4()},
  
    
  
  ])

  setRandomArray([])
  for(let j = 0; j < 16; j++ ) {
    shifter()
  }




}


  return (
    <div className="App">
      <div className='container'>
          <div className='header'>
            Matching
          </div>

          <div className='body'>
            <div className='counter'>{counter}</div>
          <div className='cardcontainertwo'>
          {randomArray.map((value, index) => (
                  
                  <div key={index} >{<Card  /*incriment={incriment}*/  clickMove={clickMove} title={randomArray[index].name} imagesource={randomArray[index].image} />}</div>
                  ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
