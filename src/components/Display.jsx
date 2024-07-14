import React from "react"
import Card from "./Card"

function Display ({ cards, onCardClick }) {
  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={() => onCardClick(index)}/>
      ))}
    </div>
  )
}

export default Display
