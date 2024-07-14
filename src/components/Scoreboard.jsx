import React from "react";

function Scoreboard({ moves, score}) {
  return (
    <div className="scoreboard">
      <p>Moves: {moves}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Scoreboard
