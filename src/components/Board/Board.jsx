import React from "react";
import Tile from "../Tile/Tile";
import { Background, GridCell, GridRow } from "./BoardStyledComponents";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: []
    };
  }

  componentDidMount() {
    this.spawnNewTile();
    this.spawnNewTile();
    document.addEventListener("keyup", e => this.handleMove(e));
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", e => this.handleMove(e));
  }

  handleMove = e => {
    const { tiles = [] } = this.state;

    if (tiles.length === 16) {
      alert("GAME OVER");
      return;
    }

    const key = e.keycode ? e.keycode : e.which;

    // let sortedTiles;
    let shiftedTiles;

    // TODO:
    // Prevent tiles from overlapping when moving
    // - Sort the tiles depending on which direction you're trying to move
    // - Maybe group by x if you're moving y and vice versa first, then sort
    // - Don't move into a space already occupied
    // Handle logic of combining & "leveling up" tiles
    // Keep score

    switch (key) {
      case 37: // LEFT
        shiftedTiles = tiles.map(tile => {
          const x = tile.x - 1 < 1 ? 0 : tile.x - 1;
          return { ...tile, x };
        });
        break;
      case 38: // UP
        shiftedTiles = tiles.map(tile => {
          const y = tile.y - 1 < 1 ? 0 : tile.y - 1;
          return { ...tile, y };
        });
        break;
      case 39: // RIGHT
        shiftedTiles = tiles.map(tile => {
          const x = tile.x + 1 > 2 ? 3 : tile.x + 1;
          return { ...tile, x };
        });
        break;
      case 40: // DOWN
        shiftedTiles = tiles.map(tile => {
          const y = tile.y + 1 > 2 ? 3 : tile.y + 1;
          return { ...tile, y };
        });
        break;
      default:
        break;
    }
    this.setState({
      tiles: shiftedTiles
    });
    this.spawnNewTile();
  };

  generateNewTileData = () => ({
    value: Math.floor(Math.random() * 10) > 7 ? 4 : 2,
    x: Math.floor(Math.random() * 4),
    y: Math.floor(Math.random() * 4)
  });

  spawnNewTile = () => {
    let { tiles = [] } = this.state;
    let newTiles;
    let stillNeeded = true;

    while (stillNeeded) {
      const newTile = this.generateNewTileData();

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
    const { tiles = [] } = this.state;
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
