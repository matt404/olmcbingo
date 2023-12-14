import './App.css';
import {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bingoTerms: [
        "Joy",
        "Angel",
        "Star",
        "Blessing",
        "Faith",
        "Grace",
        "Peace",
        "Hope",
        "Love",
        "Miracle",
        "Messiah",
        "Redeemer",
        "Salvation",
        "Glory",
        "Light",
        "Nativity",
        "Shepherd",
        "Wise Men",
        "Gospel",
        "Carol",
        "Harmony",
        "Jubilee",
        "Emmanuel",
        "Bethlehem",
        "Worship"
      ]
    };
    this.printTables = this.printTables.bind(this);
    this.printWordList = this.printWordList.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.generateBingoCards = this.generateBingoCards.bind(this);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateBingoCards(baseArray) {
    if (baseArray.length !== 25) {
      throw new Error("The base array must contain exactly 25 elements.");
    }

    const bingoCards = [];
    for (let i = 0; i < 25; i++) {
      // Clone and shuffle the base array
      const shuffledArray = this.shuffleArray([...baseArray]);
      // Create the 5x5 card
      const card = [];
      for (let j = 0; j < 5; j++) {
        card.push(shuffledArray.slice(j * 5, (j + 1) * 5));
      }
      bingoCards.push(card);
    }

    return bingoCards;
  }

  printWordList(){
    let content = [];
    for(let i=0; i < this.state.bingoTerms.length; i++){
      content.push(
          <li>{this.state.bingoTerms[i]}</li>
      );
    }
    return content;
  }


  printTables(){
    const bingoCards = this.generateBingoCards(this.state.bingoTerms);
    let content = [];
    for (let i=0; i < bingoCards.length; i++){

      content.push(
          <div>
            <table>
              <tbody>
              <tr><td>{bingoCards[i][0][0]}</td><td>{bingoCards[i][0][1]}</td><td>{bingoCards[i][0][2]}</td><td>{bingoCards[i][0][3]}</td><td>{bingoCards[i][0][4]}</td></tr>
              <tr><td>{bingoCards[i][1][0]}</td><td>{bingoCards[i][1][1]}</td><td>{bingoCards[i][1][2]}</td><td>{bingoCards[i][1][3]}</td><td>{bingoCards[i][1][4]}</td></tr>
              <tr><td>{bingoCards[i][2][0]}</td><td>{bingoCards[i][2][1]}</td><td className="FreeSquare">&nbsp;</td><td>{bingoCards[i][2][3]}</td><td>{bingoCards[i][2][4]}</td></tr>
              <tr><td>{bingoCards[i][3][0]}</td><td>{bingoCards[i][3][1]}</td><td>{bingoCards[i][3][2]}</td><td>{bingoCards[i][3][3]}</td><td>{bingoCards[i][3][4]}</td></tr>
              <tr><td>{bingoCards[i][4][0]}</td><td>{bingoCards[i][4][1]}</td><td>{bingoCards[i][4][2]}</td><td>{bingoCards[i][4][3]}</td><td>{bingoCards[i][4][4]}</td></tr>
              </tbody>
            </table>
            <div className="pagebreak"> </div>
          </div>
      );
    }
    return content;
  }

  render() {
    return (
        <div>
          {this.printTables()}
          <div>
            Bingo Word List
          </div>
          <ol>
            {this.printWordList()}
          </ol>
        </div>
    );
  }
}

export default App;
