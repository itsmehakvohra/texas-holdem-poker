import React from "react";
import { Main as Card } from "./components/card/Main";
import { Main as Table } from "./components/table/Main";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div style={{ backgroundColor: "#282c34", minHeight: "100vh" }}>
      <Container style={{ height: "100vh" }}>
        <Row style={{ height: "100%" }}>
          <Col lg={{ size: 10, offset: 1 }} style={{ marginTop: "12%" }}>
            <Table>
              <Card />
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
