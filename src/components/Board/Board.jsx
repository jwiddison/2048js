import React from "react";
import Tile from "../Tile";
import { Background, GridCell, GridRow } from "./BoardStyledComponents";
import { generateNewTilePosition, generateTileInitialValue } from "../../util";

class Board extends React.Component {
  state = {
    tiles: []
  };

  componentDidMount() {
    this.spawnNewTile();
    this.spawnNewTile();
    document.addEventListener("keyup", e => this.handleMove(e));
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", e => this.handleMove(e));
  }

  handleMove = e => {
    const { tiles } = this.state;

    if (tiles.length === 16) {
      alert("GAME OVER");
      return;
    }

    const key = e.keycode ? e.keycode : e.which;

    switch (key) {
      case 37: // LEFT
        this.spawnNewTile();
        break;
      case 38: // UP
        this.spawnNewTile();
        break;
      case 39: // RIGHT
        this.spawnNewTile();
        break;
      case 40: // DOWN
        this.spawnNewTile();
        break;
      default:
        break;
    }
  };

  spawnNewTile = () => {
    let { tiles } = this.state;
    let stillNeeded = true;
    let newTiles;
    while (stillNeeded) {
      const newTile = generateNewTilePosition();
      newTile.value = generateTileInitialValue();

      const included = tiles.reduce((acc, tile) => {
        if (acc) return acc;
        return newTile.x === tile.x && newTile.y === tile.y;
      }, false);

      if (!included) {
        newTiles = tiles.concat(newTile);
        stillNeeded = false;
      }

      if (newTiles && newTiles.length && newTiles.length === 1) {
        tiles = newTiles;
        stillNeeded = true;
      }
    }

    this.setState({
      tiles: newTiles
    });
  };

  render() {
    const { tiles } = this.state;
    const indeces = [0, 1, 2, 3];

    return (
      <Background>
        {tiles.map((tile, index) => (
          <Tile {...tile} key={index} />
        ))}
        {indeces.map(index => (
          <GridRow key={index}>
            {indeces.map(childIndex => (
              <GridCell key={childIndex} />
            ))}
          </GridRow>
        ))}
      </Background>
    );
  }
}

export default Board;
