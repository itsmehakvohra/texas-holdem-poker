import React from "react";
import { Main as Card } from "./components/card/Main";
import { Main as Table } from "./components/table/Main";

import { Container, Row, Col } from "reactstrap";

export const Suit = {
  HEART: "1",
  DIAMOND: "2",
  SPADE: "3",
  CLUB: "4",
};

export const Value = {
  ACE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
  JACK: "11",
  QUEEN: "12",
  KING: "13",
};

const wsUri = "ws://192.168.50.155:23345/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOneSuit: "",
      cardOneLetter: "",
      cardTwoSuit: "",
      cardTwoLetter: "",
    };
  }

  websocket = new WebSocket(wsUri);

  componentDidMount() {
    this.websocket.init = () => {
      this.websocket.onopen = function (evt) {
        this.websocket.onOpen(evt);
      };
      this.websocket.onmessage = function (evt) {
        this.websocket.onMessage(evt);
      };
    };

    this.websocket.onopen = () => {
      this.websocket.send("join");
    };

    this.websocket.onmessage = (evt) => {
      // I got these cards: evt.data
      const data = JSON.parse(evt.data);

      //cardOne
      const cardOne = data[0];
      const cardOneNum1 = cardOne[1];
      const cardOneNum2 = cardOne[3];

      // //convert suits and letters
      const cardOneSuit = checkSuit(cardOneNum1);
      const cardOneLetter = checkLetter(cardOneNum2);

      console.log("Letter 1 #: " + cardOneNum2);
      console.log("Letter 1: " + cardOneLetter);

      //cardTwo
      const cardTwo = data[1];
      const cardTwoNum1 = cardTwo[1];
      const cardTwoNum2 = cardTwo[3];

      // //conver suits and letters
      const cardTwoSuit = checkSuit(cardTwoNum1);
      const cardTwoLetter = checkLetter(cardTwoNum2);

      console.log("Letter 2 #: " + cardTwoNum2);
      console.log("Letter 2: " + cardTwoLetter);

      //setState
      this.setState({
        cardOneSuit: cardOneSuit,
        cardOneLetter: cardOneLetter,
        cardTwoSuit: cardTwoSuit,
        cardTwoLetter: cardTwoLetter,
      });
    };

    function checkSuit(suit) {
      if (suit === Suit.HEART) {
        return "❤️";
      } else if (suit === Suit.DIAMOND) {
        return "♦️";
      } else if (suit === Suit.SPADE) {
        return "♠️";
      } else if (suit === Suit.CLUB) {
        return "♣️";
      }
    }

    function checkLetter(letter) {
      console.log(letter);
      if (letter === Value.ACE) {
        return "A";
      } else if (letter === Value.TWO) {
        return "2";
      } else if (letter === Value.THREE) {
        return "3";
      } else if (letter === Value.FOUR) {
        return "4";
      } else if (letter === Value.FIVE) {
        return "5";
      } else if (letter === Value.SIX) {
        return "6";
      } else if (letter === Value.SEVEN) {
        return "7";
      } else if (letter === Value.EIGHT) {
        return "8";
      } else if (letter === Value.NINE) {
        return "9";
      } else if (letter === Value.TEN) {
        return "10";
      } else if (letter === Value.JACK) {
        return "J";
      } else if (letter === Value.QUEEN) {
        return "Q";
      } else if (letter === Value.KING) {
        return "K";
      }
    }

    window.addEventListener("load", this.websocket.init, false);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#282c34", minHeight: "100vh" }}>
        <Container style={{ height: "100vh" }}>
          <Row style={{ height: "100%" }}>
            <Col lg={{ size: 10, offset: 1 }} style={{ marginTop: "12%" }}>
              <Table>
                <Card
                  suit={this.state.cardOneSuit}
                  letter={this.state.cardOneLetter}
                />
                <Card
                  suit={this.state.cardTwoSuit}
                  letter={this.state.cardTwoLetter}
                />
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
