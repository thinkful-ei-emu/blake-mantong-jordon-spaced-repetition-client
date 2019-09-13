import React, { Component } from 'react'

const initialState = {
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: null,
    guess: null,
    prevWord: null,
    isCorrect: null,
    answer: null,
    error: null,
    isFeedbackDisplayed: false
}

const ProgressContext = React.createContext({
    ...initialState,
    setNextWord: () => { },
    setTotalScore: () => { },
    setWordCorrectCount: () => { },
    setWordIncorrectCount: () => { },
    setGuess: () => { },
    setAnswer: () => { },
    setIsCorrect: () => { },
    reset: () => { },
    setIsResultDisplayed: () => { },
})

export default ProgressContext;

export class ProgressProvider extends Component {
    state = {
        ...initialState
    }

    setTotalScore = totalScore => {
        this.setState({ totalScore })
    }

    setWordCorrectCount = wordCorrectCount => {
        this.setState({ wordCorrectCount })
    }

    setWordIncorrectCount = wordIncorrectCount => {
        this.setState({ wordIncorrectCount })
    }

    setNextWord = nextWord => {
        this.setState({ nextWord })
    }

    setGuess = guess => {
        this.setState({ guess })
    }

    setPrevWord = prevWord => {
        this.setState({ prevWord })
    }

    setIsCorrect = isCorrect => {
        this.setState({ isCorrect })
    }

    setAnswer = answer => {
        this.setState({ answer })
    }

    reset = () => {
        this.setState({ ...initialState })
    }

    setIsFeedbackDisplayed = bool => {
        this.setState({ isFeedbackDisplayed: bool })
    }


    render() {
        const value = {
            totalScore: this.state.totalScore,
            wordCorrectCount: this.state.wordCorrectCount,
            wordIncorrectCount: this.state.wordIncorrectCount,
            nextWord: this.state.nextWord,
            guess: this.state.guess,
            prevWord: this.state.prevWord,
            isCorrect: this.state.isCorrect,
            answer: this.state.answer,
            error: this.state.error,
            isFeedbackDisplayed: this.state.isFeedbackDisplayed,

            setTotalScore: this.setTotalScore,
            setWordCorrectCount: this.setWordCorrectCount,
            setWordIncorrectCount: this.setWordIncorrectCount,
            setNextWord: this.setNextWord,
            setGuess: this.setGuess,
            setPrevWord: this.setPrevWord,
            setIsCorrect: this.setIsCorrect,
            setAnswer: this.setAnswer,
            reset: this.reset,
            setIsFeedbackDisplayed: this.setIsFeedbackDisplayed
        }
        return (
            <ProgressContext.Provider value={value}>
                {this.props.children}
            </ProgressContext.Provider>
        )
    }
}
