import styled from "styled-components";

const BACKGROUND_COLOR = "#cac1b6";
const BORDER_COLOR = "#b8aea2";

export const Background = styled.div`
  background-color: ${BORDER_COLOR}
  border: 20px solid ${BORDER_COLOR};
  border-radius: 6px;
  height: 500px;
  position: relative;
  width: 500px;
`;

export const GridCell = styled.div`
  background-color: ${BACKGROUND_COLOR};
  height: 100px;
  margin: 0 20px 20px 0;
  width: 100px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const GridRow = styled.div`
  display: flex;
`;
