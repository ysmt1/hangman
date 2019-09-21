class Hangman {
    constructor(word, numberGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.numberGuesses = numberGuesses
        this.status = 'playing'
    }
    get statusMessage() {
        // Return different status messages based on status state
        if (this.status === 'playing') {
            return `Guesses left: ${this.numberGuesses}`
        } else if (this.status === 'failed') {
            return `Nice Try, the word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word'
        } 
    }
    getStatus() {
        // Update status based on number of guesses and if the word has been guessed (finished)
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
        })

        if (this.numberGuesses <= 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
        /* Create a string that represents the secret word, with the correct letters
        being filled in and unguessed letters represented by *  */
        let puzzleText = ''

        this.word.forEach((letter) => {
            let found

            this.guessedLetters.forEach((guess) => {
                if (letter === guess) {
                    puzzleText += letter
                    found = true
                }
            })

            if (letter === ' ') {
                puzzleText += ' '
            }
            else if (found != true) {
                puzzleText += '*'
            }
        })
        return puzzleText
    }
    makeGuess(letter) {
        // Make a guess while status is 'playing'
        if (this.status !== 'playing') {
            return
        }
        letter = letter.toLowerCase()

        if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter)
            if (!this.word.includes(letter)) {
                this.numberGuesses--
            }
        }

        this.getStatus()
        console.log(this.statusMessage)
    }

}

