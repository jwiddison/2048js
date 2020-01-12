import styled from "styled-components";

const LOW_NUMBERS_TEXT_COLOR = "#756e66";
const HIGH_NUMBERS_TEXT_COLOR = "#f9f6f3";

const colors = {
  2: "#ece4db",
  4: "#ebe0cb",
  8: "#e7b482",
  16: "#e6996d",
  32: "#e48367",
  64: "#e26848",
  128: "#e7d07f",
  256: "#e7cd73",
  512: "#ecd163",
  1024: "#dcbb43",
  2048: "#e5c542",
  fallback: "#85d698"
};

const calcTileBackground = number =>
  number > 2048 ? colors["fallback"] : colors[number];

const calcOffset = value => value * 120;

export const Number = styled.span`
  font-size: 32px;
`;

export const TileBackground = styled.div`
  align-items: center;
  background-color: ${props => calcTileBackground(props.value)};
  border-radius: 1px;
  color: ${props =>
    props.value > 4 ? HIGH_NUMBERS_TEXT_COLOR : LOW_NUMBERS_TEXT_COLOR};
  display: flex;
  height: 100px;
  justify-content: center;
  left: ${props => calcOffset(props.x)}px;
  position: absolute;
  top: ${props => calcOffset(props.y)}px;
  width: 100px;

  @keyframes appear {
    0% {
      margin-top: 10px;
      margin-left: 10px;
      height: 80px;
      width: 80px;
    }
    25% {
      margin-top: 7.5px;
      margin-left: 7.5px;
      height: 85px;
      width: 85px;
    }
    50% {
      margin-top: 5px;
      margin-left: 5px;
      height: 90px;
      width: 90px;
    }
    100% {
      height: 100px;
      width: 100px;
    }
  }

  animation-name: appear;
  animation-duration: 0.3s;

  transition: left 0.3s ease;
  transition: top 0.3s ease;
`;
