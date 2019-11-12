import React, { useState } from "react";
import Tile from "../Tile";
import { Background, GridCell, GridRow } from "./BoardStyledComponents";

const Board = () => {
  const [tiles, setTiles] = useState([<Tile />, <Tile />]);

  return (
    <Background>
      {tiles.map((tile, _index) => tile)}
      <GridRow>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </GridRow>
      <GridRow>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </GridRow>
      <GridRow>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </GridRow>
      <GridRow>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </GridRow>
    </Background>
  );
};

export default Board;
