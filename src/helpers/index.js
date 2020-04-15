
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLatterSet = new Set(secretWord.split(""));
    const gussedLetterSet = new Set(guessedWord.split(""));
    return [...secretLatterSet].filter(letter => gussedLetterSet.has(letter)).length;
}