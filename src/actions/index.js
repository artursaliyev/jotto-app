export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
}

/**
 * @function correctGuest
 * @returns {object} - Action onject with type `CORRECT_GUESS`
 */
export function correctGuess() {
    return { type: actionTypes.CORRECT_GUESS }
}