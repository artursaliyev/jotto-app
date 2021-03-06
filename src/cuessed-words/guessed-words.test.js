import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp } from "../../test/testUtils";
import GuessedWords from "./guessed-words"


const defaultProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 },]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
};

test("does not throw warning with expected props", () => {
    checkProp(GuessedWords, defaultProps)
})

describe("if there are no words guessed", () => {
    let warapper;
    beforeEach(() => {
        warapper = setup({ guessedWords: [] });
    })
    test("renders wuthout error", () => {
        const component = findByTestAttr(warapper, "component-guessed-words");
        expect(component.length).toBe(1);
    })
    test("renders instructions to guess a word", () => {
        const instructions = findByTestAttr(warapper, "guess-instruction");
        expect(instructions.text().length).not.toBe(0);
    })
});

describe("if there are words guessed", () => {
    let warapper;
    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
    ]
    beforeEach(() => {
        warapper = setup({ guessedWords });
    })
    test("renders wuthout error", () => {
        const component = findByTestAttr(warapper, "component-guessed-words");
        expect(component.length).toBe(1);
    })
    test("renders 'guessed words' section", () => {
        const guessedWordsNode = findByTestAttr(warapper, "guessed-words");
        expect(guessedWordsNode.length).toBe(1);
    })
    test("correct number of gessed words", () => {
        const guessedWordNodes = findByTestAttr(warapper, "guessed-word");
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    })
});