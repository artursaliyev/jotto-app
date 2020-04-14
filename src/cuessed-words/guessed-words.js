import React from "react";
import PropTypes from "prop-types";


const GuessedWords = (props) => {
    let contects;
    if (props.guessedWords.length === 0) {
        contects = (
            <span data-test="guess-instruction">
                Try to guess the secret word!
            </span>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contects}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;