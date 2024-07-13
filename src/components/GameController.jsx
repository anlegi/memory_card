import React, { useState, useEffect } from "react";
import { fetchPokemons } from "./FetchPokemon";
import Display from "./Display";
import Scoreboard from "./Scoreboard"

function GameController() {
  const [cards, setCards] = useState([])
  const [flippedIndexes, setFlippedIndexes] = useState([])
  const [moves, setMoves] = useState(0)
}
