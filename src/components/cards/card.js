import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Letter } from "./typography";

const Main = styled.div`
  background-color: white;
  width: 120px;
  height: 100%;
  border-radius: 15px;
  color: black;
  position: relative;
`;

const Art = styled.div`
  min-height: 50px;
`;

const Bottom = styled.div`
  width: 100%;
`;

const ConstainerStyle = {
  padding: "10px 15px",
};

export default class Card extends React.Component {
  render() {
    return (
      <Main>
        <Container style={ConstainerStyle}>
          <Row>
            <Col>
              <Row>
                <Letter>
                  A<br />
                  <span role="img" aria-label="spade">
                    ♠️
                  </span>
                </Letter>
              </Row>
            </Col>
            <Col>
              <Row>
                <Art>
                  <span
                    role="img"
                    aria-label="spade"
                    style={{ fontSize: "50px", top: "-100px" }}
                  >
                    ♠️
                  </span>
                </Art>
              </Row>
            </Col>
            <Col>
              <Bottom>
                <Letter textAlign="right">
                  A<br />
                  <span role="img" aria-label="spade">
                    ♠️
                  </span>
                </Letter>
              </Bottom>
            </Col>
          </Row>
        </Container>
      </Main>
    );
  }
}
