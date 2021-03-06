import React, { Component } from "react";
import "./css/TriviaGame.css";
import NewGameForm from "./NewGameForm";
import GameStart from "./GameStart";

// This class decides if it's going to render
// NewGameForm(get user input) or GameStart(start the game) components
export class TriviaGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGame: { totalQuestions: 5, category: "", id: false },
      player: { curQuestion: 1, curScore: 0 },
      data: "",
      ready: false,
      startNewGame: false
    };
    this.create = this.create.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  // NewGameForm will invoke this function once it gets all information needed to create a new game
  create(newGame) {
    this.setState({ newGame: "", startNewGame: false });
    this.setState({ newGame: newGame, ready: true });
  }

  // This function is invoked after user click NEW GAME BUTTON in GameEnd Component
  handleNewGame() {
    this.setState({ newGame: { totalQuestions: 5, category: "", id: false } });
    this.setState({ startNewGame: true });
  }

  render() {
    const totalQ = this.state.newGame.totalQuestions;
    const id = this.state.newGame.id;
    const catName = this.state.newGame.category;

    const game =
      !this.state.ready || this.state.startNewGame ? (
        <NewGameForm create={this.create} />
      ) : (
        <GameStart
          totalQ={totalQ}
          catId={id}
          catName={catName}
          newGameBtn={this.handleNewGame}
        />
      );

    return (
      <div className="TriviaGame">
        <h1>Trivia Game</h1>

        {game}
      </div>
    );
  }
}

export default TriviaGame;
