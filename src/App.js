import React from "react";
import "./App.css";
import { Board } from "./components";

const App = () => {
  return (
    <div className="game-container">
      <h1>2048</h1>
      <Board />
    </div>
  );
};

export default App;
