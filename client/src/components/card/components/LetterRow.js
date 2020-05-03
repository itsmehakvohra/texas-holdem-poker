import React from "react";
import { LetterSM } from "../typography";

export default class LetterRow extends React.Component {
  render() {
    return (
      <>
        <LetterSM textAlign={this.props.align}>A</LetterSM>
        <LetterSM textAlign={this.props.align}>
          <span role="img" aria-label="spade">
            ♠️
          </span>
        </LetterSM>
      </>
    );
  }
}
