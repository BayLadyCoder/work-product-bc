import React, { Component } from "react";
import Categories from "./Categories";
import "./NewGameForm.css";

export class NewGameForm extends Component {
  static defaultProps = Categories;
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: "5",
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGame = this.state;
    this.props.create(newGame);
    this.setState({ totalQuestions: "5", category: "" });
  }

  render() {
    const totalQuestionSet = [5, 10, 15, 20, 25, 30];

    return (
      <div className="NewGameForm">
        <form onSubmit={this.handleSubmit} className="NewGameForm-form">
          <div className="NewGameForm-totalQuestions">
            <label
              htmlFor="totalQuestions"
              id="totalQuestionsLabel"
              className="ask"
            >
              How many questions do you want to play?
            </label>
            <select
              onChange={this.handleChange}
              name="totalQuestions"
              id="totalQuestions"
              value={this.state.totalQuestions}
            >
              {totalQuestionSet.map(set => (
                <option value={set}>{set}</option>
              ))}
            </select>
          </div>
          <p className="ask">Choose a category</p>
          <div className="NewGameForm-categories">
            {this.props.trivia_categories.map(cat => (
              <label className="NewGameForm-category">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  value={cat.name}
                  name="category"
                  checked={this.state.category === cat.name ? true : false}
                  key={cat.name}
                  id={cat.name}
                />
                {cat.name}
              </label>
            ))}
          </div>
          <button>Play Game</button>
        </form>
      </div>
    );
  }
}

export default NewGameForm;