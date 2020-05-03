import React from "react";
import { LetterSM } from "./typography";

export default class LetterRow extends React.Component {
  render(props) {
    return (
      <LetterSM textAlign={this.props.align}>
        A<br />
        <span role="img" aria-label="spade">
          ♠️
        </span>
      </LetterSM>
    );
  }
}
