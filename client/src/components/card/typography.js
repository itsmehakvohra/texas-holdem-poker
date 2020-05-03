import styled from "styled-components";

export const LetterSM = styled.h3`
  font-size: 20px;
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
`;

export const LetterLG = styled.h3`
  font-size: 40px;
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "center"};
`;
