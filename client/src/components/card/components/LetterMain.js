import React from "react";
import { LetterLG } from "../typography";

export default class LetterMain extends React.Component {
  render() {
    return (
      <LetterLG>
        <span role="img" aria-label="spade">
          {this.props.suit}
        </span>
      </LetterLG>
    );
  }
}
