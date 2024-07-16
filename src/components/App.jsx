import React from 'react';
import GameController from './GameController';
import backgroundImage from '../assets/c/background.jpg';

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="pixelated-text"> Pokemon Memory Card Game</h1>
      <GameController/>
    </div>
  );
}

export default App
