import styled from "styled-components";

export const Letter = styled.h3`
  font-size: 20px;
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
`;
