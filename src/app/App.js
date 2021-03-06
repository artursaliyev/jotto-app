import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "../cuessed-words"
import Congrats from "../congrats"
import Input from "../input/input"
import { getSecretWord } from "../actions"

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return <div className="container">
      <h1>Jotto App  </h1>
      {/* <div>The secret word is {this.props.secretWord}</div> */}
      <Congrats success={this.props.success} />
      <Input />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div >;
  }
}


const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
