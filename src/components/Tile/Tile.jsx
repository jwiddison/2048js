import React, { useState } from "react";
import { Number, TileBackground } from "./TileStyledComponents";

const calcInitialNumber = () => {
  const odds = Math.floor(Math.random() * 10);
  return odds > 7 ? 4 : 2;
};

const Tile = () => {
  const [number, setNumber] = useState(calcInitialNumber());
  const [x, setX] = useState(Math.floor(Math.random() * 4));
  const [y, setY] = useState(Math.floor(Math.random() * 4));

  const levelUp = () => {
    setNumber(number * 2);
  };

  const calcOffset = value => value * 120;

  return (
    <TileBackground
      style={{ top: calcOffset(y), left: calcOffset(x) }}
      number={number}
    >
      <Number>{number}</Number>
    </TileBackground>
  );
};

export default Tile;
