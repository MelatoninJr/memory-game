
import { Component, useEffect, useState } from 'react';
import './App.css';
import Card from './components/card'
import { v4 as uuidv4 } from 'uuid';

function App() {
const [cardArray, setCardArray] = useState([
{name: 'Charmander', image: './charmander.png', id:uuidv4()},
{name: 'Charmeleon', image: './charmeleon.png', id:uuidv4()},
{name: 'Charizard', image: './charizard.png', id:uuidv4()},
{name: 'Mew', image: './mew.png', id:uuidv4()},
{name: 'Mewtwo', image: './mewtwo.png', id:uuidv4()},
{name: 'Pikachu', image: './pikachu.png', id:uuidv4()},
{name: 'Muk', image: './muk.png', id:uuidv4()},
{name: 'Minetails', image: './ninetails.png', id:uuidv4()},
{name: 'Ghastly', image: './ghastly.png', id:uuidv4()},
{name: 'Gengar', image: './gengar.png', id:uuidv4()},
{name: 'Mrmime', image: './mrmime.png', id:uuidv4()},
{name: 'Starmie', image: './starmie.png', id:uuidv4()},
{name: 'Squirtle', image: './squirtle.png', id:uuidv4()},
{name: 'Blastoise', image: './blastoise.png', id:uuidv4()},
{name: 'Lugia', image: './lugia.png', id:uuidv4()},

])
const [selectArray, setSelectArray] = useState([])
const [randomArray, setRandomArray] = useState([])
const [counter, setCounter] = useState(0)
const [highscore, setHighscore] = useState(0)
let helperarray = []



const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const shifter = (e) => {
  let number1 = cardArray.length 
  let number2 = getRandomInt(number1)



  if(cardArray.length === 0) {
    return
  }


  //setRandomArray([...randomArray, cardArray[number2]])

  //setCardArray(cardArray.filter(x => {x.index !== number2}))
 
  //console.log(newdemoarray)
 
  //console.log(helperarray, number2)
  randomArray.push(cardArray[number2])
  helperarray.push(cardArray[number2])
  //setRandomArray(helperarray)
  cardArray.splice(number2, 1)

  //console.log(randomArray)
  

}
console.log(randomArray)



for(let i = 0; i < 16; i++) {
  shifter()
}



//helper ray is full
//random array is what we base generation off of and it is also full
//onclick I need to set helper and random to [] AND set card array back to full so I can reshuffle
//setting select array to [] only happens when you lose so you can start a new game






const clickMove = (e) => {
  let nameevent = e.target.closest('.cardcontainer')

 
  const isBelowThreshold = (currentValue) => (currentValue !== nameevent.id)
 





    if(selectArray.every(isBelowThreshold) === false) {
      setCounter(0)
      console.log('You lose')
      if(counter > highscore) {
        setHighscore(counter)
      }
      setSelectArray([])

      
      
    } else if(selectArray.every(isBelowThreshold) === true){     

          selectArray.push(nameevent.getAttribute('id'))
          setCounter(counter + 1)
          console.log('You dont lose')

    }

    setCardArray([
      
      {name: 'Charmander', image: './charmander.png', id:uuidv4()},
      {name: 'Charmeleon', image: './charmeleon.png', id:uuidv4()},
      {name: 'Charizard', image: './charizard.png', id:uuidv4()},
      {name: 'Mew', image: './mew.png', id:uuidv4()},
      {name: 'Mewtwo', image: './mewtwo.png', id:uuidv4()},
      {name: 'Pikachu', image: './pikachu.png', id:uuidv4()},
      {name: 'Muk', image: './muk.png', id:uuidv4()},
      {name: 'Minetails', image: './ninetails.png', id:uuidv4()},
      {name: 'Ghastly', image: './ghastly.png', id:uuidv4()},
      {name: 'Gengar', image: './gengar.png', id:uuidv4()},
      {name: 'Mrmime', image: './mrmime.png', id:uuidv4()},
      {name: 'Starmie', image: './starmie.png', id:uuidv4()},
      {name: 'Squirtle', image: './squirtle.png', id:uuidv4()},
      {name: 'Blastoise', image: './blastoise.png', id:uuidv4()},
      {name: 'Lugia', image: './lugia.png', id:uuidv4()},
  
    
  
  ])
  helperarray = []
  setRandomArray([])

  //console.log(helperarray, randomArray, cardArray)

  for(let j = 0; j < 16; j++ ) {
    shifter()
  }




}


  return (
    <div className="App">
      <div className='container'>
          <div className='header'>
          Pokémon Matching
          </div>
          <div className ='countercontainer'>
            <div className='counter'> High Score - {highscore}</div>
            <div className='counter'> Current Score - {counter}</div>

          </div>
          <div className='body'>
 


          <div className='cardcontainertwo'>
          {randomArray.map((value, index) => (
                  
                  <div key={index} >{<Card  clickMove={clickMove} title={randomArray[index].name} imagesource={randomArray[index].image} />}</div>
                  ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
