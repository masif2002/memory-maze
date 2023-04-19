import React, { useState, useEffect } from 'react';
import shuffle from './utils/shuffle';
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const [cards, setCards] = useState(shuffle)
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [wins, setWins] = useState(0)

  useEffect(() => {

    
    // If a second card is selected
    if (pickTwo) {
      // If its a match
      if (pickOne.image == pickTwo.image) {
        setPickOne(null)
        setPickTwo(null)

        if (gameWon()) {
          setWins(wins+1)
          resetGame()
        }

      } else {
        // If its not a match
        setDisabled(true) 
        const timeout = setTimeout(() => {
          pickOne.selected = false
          pickTwo.selected = false
          setPickOne(null)
          setPickTwo(null)
          setDisabled(false)
        }, 1000)


        return () => clearTimeout(timeout)
      }
    }


  }, [pickTwo])
  

  const handleClick = (card) => {
    // Opening a card
    if (!disabled) {
      card.selected = true
      pickOne ? setPickTwo(card) : setPickOne(card)
    }

  }

  const resetGame = () => {
    setCards(shuffle)
    setPickOne(null)
    setPickTwo(null)
  }

  const gameWon = () => {
    const cardsLeft = cards.filter((card) => !card.selected)
    console.log('hello');
    return cardsLeft.length < 1
  }
  

  return (
    <div>
      <Header onclickk={resetGame} wins={wins} />
      <div className='grid'>
        {cards.map((card) =>
          <Card
              key={card.id}
              image={card.image}
              selected={card.selected}
              onClickk={() => handleClick(card)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
