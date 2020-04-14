import React from "react";
import "./App.css";

import GuessedWords from "../cuessed-words"
import Congrats from "../congrats"

function App() {
  return <div className="container">
    <h1>Jotto App</h1>
    <Congrats success={true} />
    <GuessedWords guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]} />
  </div>;
}

export default App;
