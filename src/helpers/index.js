
export function getLetterMatchCount(guessedWord, secretWord) {
    const gussedLetterSet = new Set(guessedWord.split(""));
    const secretLatterSet = new Set(secretWord.split(""));
    return [...secretLatterSet].filter(letter => gussedLetterSet.has(letter)).length;
}