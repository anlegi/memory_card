import React, { useState, useEffect } from "react";
import { generateShuffledCards } from "./GenerateShuffledCards";
import Display from "./Display";
import Scoreboard from "./Scoreboard"


function GameController() {
  // state to hold the cards
  const [cards, setCards] = useState([])
  // state to hold the names of the clicked cards
  const [clickedNames, setClickedNames] = useState([])
  // state to hold the number of moves
  const [moves, setMoves] = useState(0)
  // state to hold the current score
  const [score, setScore] = useState(0)
  // state to hold the game status
  const [gameStatus, setGameStatus] = useState("")

  // effect to load pokemon data
  useEffect(() => {
    async function loadPokemons() {
      const shuffledCards = await generateShuffledCards(8) // generate and shuffle cards
      setCards(shuffledCards)
    }
    loadPokemons() // call async function
  }, [])


  function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5)
  }



  //handle card clicks
  function handleCardClick(index) {
    const clickedCard = cards[index]
    if (clickedNames.includes(clickedCard.name)) { //card has already been clicked, reset game
      setClickedNames([])
      setMoves(0)
      setScore(0)
      alert("You clicked the same pokemon again! Starting over.")
    } else {
      //card hasnt been clicked, update state
      const newClickedNames = [...clickedNames, clickedCard.name]
      setClickedNames(newClickedNames)
      setMoves(moves + 1)
      setScore(score + 1)

      // Check for win condition
      if (newClickedNames.length === cards.length) {
        setGameStatus('Congratulations! You have clicked all cards without repeating!');
      } else {
        // Shuffle the deck
        setCards(shuffleDeck([...cards]));
      }
    }
  }

  return (
    <div>
      <Scoreboard moves={moves} score={score} />
      <Display cards={cards} onCardClick={handleCardClick} />
    </div>
  )
}

export default GameController;
