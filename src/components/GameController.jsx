import React, { useState, useEffect } from "react";
import { generateShuffledCards } from "./GenerateShuffledCards";
import Display from "./Display";
import Scoreboard from "./Scoreboard"
import Modal from "./Modal";


function GameController() {
  // state to hold the cards
  const [cards, setCards] = useState([])
  // state to hold the names of the clicked cards
  const [clickedNames, setClickedNames] = useState([])

  const [bestScore, setBestScore] = useState(0)
  // state to hold the current score
  const [score, setScore] = useState(0)

  const [modalMessage, setModalMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

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
      //update best score if current score is higher
      if (score > bestScore) {
        setBestScore(score)
      }
      setClickedNames([])
      setScore(0)
      setModalMessage("You clicked the same card again! Game over.");
      setShowModal(true);
    } else {
      //card hasnt been clicked, update state
      const newClickedNames = [...clickedNames, clickedCard.name]
      setClickedNames(newClickedNames)
      setScore(score + 1)

      // Check for win condition
      if (newClickedNames.length === cards.length) {
        setModalMessage("Congratulations! You have clicked all cards without repeating!")
        setShowModal(true)

        if (score + 1 > bestScore) {
          setBestScore(score + 1)
        }
      } else {
        // Shuffle the deck
        setCards(shuffleDeck([...cards]));
      }
    }
  }

  function handleCloseModal() {
    setShowModal(false);
    setModalMessage('');
  }

  return (
    <div>
      <Scoreboard score={score} bestScore={bestScore} />
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
      <Display cards={cards} onCardClick={handleCardClick} />
    </div>
  )
}

export default GameController;
