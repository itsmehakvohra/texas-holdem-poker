import React from "react";
import { LetterLG } from "./typography";

export default class LetterMain extends React.Component {
  render() {
    return (
      <LetterLG>
        <span role="img" aria-label="spade" style={{ top: "-100px" }}>
          ♠️
        </span>
      </LetterLG>
    );
  }
}
