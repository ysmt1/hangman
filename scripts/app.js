const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let hangman1

// On keypress, call makeGuess and render function
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    render()
})

// Render main hangman app
const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.textContent = hangman1.statusMessage

    const puzzleText = hangman1.puzzle.split('')
    puzzleText.forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    })
}

// Start hangman game with 5 guesses
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    hangman1 = new Hangman(puzzle, 5)
    render()

}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

