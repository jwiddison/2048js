import React from "react";
import styled from "styled-components";
import "./App.css";
import { Board } from "./components";

const GameContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  text-align: center;
  width: 100%;
`;

const App = () => {
  return (
    <GameContainer>
      <h1>2048</h1>
      <Board />
    </GameContainer>
  );
};

export default App;
