import React from "react";
import propTypes from "prop-types";
import { Number, TileBackground } from "./TileStyledComponents";

const calcOffset = value => value * 120;

const Tile = ({ value, x, y }) => (
  <TileBackground
    number={value}
    style={{ top: calcOffset(y), left: calcOffset(x) }}
  >
    <Number>{value}</Number>
  </TileBackground>
);

Tile.propTypes = {
  value: propTypes.number.isRequired,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired
};

export default Tile;
