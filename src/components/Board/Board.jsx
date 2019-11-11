import React from "react";
import Tile from "../Tile";
import { Background, GridCell, GridRow } from "./BoardStyledComponents";

const Board = props => {
  return (
    <Background>
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Tile number={2} />
        <Tile number={4} />
        <Tile number={8} />
        <Tile number={16} />
        <Tile number={32} />
        <Tile number={64} />
        <Tile number={128} />
        <Tile number={256} />
        <Tile number={512} />
        <Tile number={1024} />
        <Tile number={2048} />
      </div>
    </Background>
  );
};

export default Board;
