import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Table = styled.div`
  background-color: #007600;
  min-height: 250px;
  height: 75%;
  max-width: 1200px;
  border-radius: 300px;
  border: 10px solid #1d2026;
  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.3);
  margin: 0 20px;
  padding: 40px 0;
`;

export class Main extends React.Component {
  render() {
    return (
      <Table>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 3 }}>{this.props.children}</Col>
          </Row>
        </Container>
      </Table>
    );
  }
}
