import React from "react"

function Card({ card, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.name} />
    </div>
  )
}

export default Card
