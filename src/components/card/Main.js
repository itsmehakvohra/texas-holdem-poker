import React from "react";
import { Container } from "reactstrap";

import { Card } from "./components/Card";
import LetterRow from "./components/LetterRow";
import LetterMain from "./components/LetterMain";

const ConstainerStyle = {
  padding: "10px 15px",
};

export class Main extends React.Component {
  render() {
    return (
      <Card>
        <Container style={ConstainerStyle}>
          <LetterRow align="left" />
          <LetterMain />
          <LetterRow align="right" />
        </Container>
      </Card>
    );
  }
}
