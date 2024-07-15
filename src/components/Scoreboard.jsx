import React from "react";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p className="pixelated-text-score">Score: {score}</p>
      <p className="pixelated-text-bestscore">Best Score {bestScore}</p>
    </div>
  )
}

export default Scoreboard
