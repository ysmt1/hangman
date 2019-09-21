const getPuzzle = async (wordCount) => {
    // Get word asynchronously from URL
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Could not get puzzle')
    }
}
