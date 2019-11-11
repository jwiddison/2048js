import React from "react";
import { Number, TileBackground } from "./TileStyledComponents";

const Tile = props => {
  const { number } = props;

  return (
    <TileBackground number={number}>
      <Number number={number}>{number}</Number>
    </TileBackground>
  );
};

export default Tile;
