import React from "react";
import propTypes from "prop-types";
import { Number, TileBackground } from "./TileStyledComponents";

const Tile = ({ value, x, y }) => (
  <TileBackground value={value} x={x} y={y}>
    <Number>{value}</Number>
  </TileBackground>
);

Tile.propTypes = {
  value: propTypes.number.isRequired,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired
};

export default Tile;
