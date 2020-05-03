import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Card } from "./Card";
import LetterRow from "./LetterRow";
import LetterMain from "./LetterMain";

const ConstainerStyle = {
  padding: "10px 15px",
};

export class Main extends React.Component {
  render() {
    return (
      <Card>
        <Container style={ConstainerStyle}>
          <Row>
            <Col>
              <LetterRow align="left" />
            </Col>
            <Col>
              <LetterMain />
            </Col>
            <Col>
              <LetterRow align="right" />
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}
