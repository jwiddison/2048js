export const generateNewTilePosition = () => ({
  x: Math.floor(Math.random() * 4),
  y: Math.floor(Math.random() * 4)
});

export const generateTileInitialValue = () =>
  Math.floor(Math.random() * 10) > 7 ? 4 : 2;
