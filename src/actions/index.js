export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const GIVE_AURAL_STATUS = 'GIVE_AURAL_STATUS';
export const giveAuralStatus = () => ({
    type: GIVE_AURAL_STATUS
});