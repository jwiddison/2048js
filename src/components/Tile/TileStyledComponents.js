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
  2048: "#e5c542"
};

export const Number = styled.span`
  color: ${props =>
    props.number > 4 ? HIGH_NUMBERS_TEXT_COLOR : LOW_NUMBERS_TEXT_COLOR};
  font-size: 32px;
`;

export const TileBackground = styled.div`
  align-items: center;
  background-color: ${props => colors[props.number]};
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 20px 20px 0;
  width: 100px;
`;
