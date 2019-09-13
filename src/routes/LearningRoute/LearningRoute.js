import React, { Component } from 'react'
import DashboardService from '../../services/dashboard-api-service.js';
import AnswerForm from '../../components/AnswerForm/AnswerForm'
import ProgressContext from '../../contexts/ProgressContext';
import Feedback from '../../components/Feedback/Feedback';

class LearningRoute extends Component {
  static contextType = ProgressContext;

  handleSubmit = (guess) => {
    console.log(guess)
    DashboardService.postGuess(guess)
      .then(res => {
        this.context.setTotalScore(res.totalScore)
        this.context.setWordCorrectCount(res.wordCorrectCount)
        this.context.setWordIncorrectCount(res.wordIncorrectCount)
        this.context.setPrevWord(res.nextWord);
        this.context.setNextWord(res.nextWord)
        this.context.setAnswer(res.answer)
        this.context.setGuess(guess)
        this.context.setIsCorrect(res.isCorrect)
        this.context.setIsFeedbackDisplayed(true)
      })
  }

  componentDidMount() {
    DashboardService.getHead()
      .then(data => {
        if (!data) {
          console.error(data);
        }
        this.context.setNextWord(data.nextWord)
        this.context.setTotalScore(data.totalScore)
        this.context.setWordCorrectCount(data.wordCorrectCount)
        this.context.setWordIncorrectCount(data.wordIncorrectCount)
      })
      .catch(e => {
        console.error(e);
      })
  }


  render() {
    return (
      <section>
        {(!this.context.isFeedbackDisplayed ?
          <section>
            <div>
              <h2>Translate the word:</h2>
              <span>{this.context.nextWord}</span>
            </div>
            <form onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(e.target.guessInput.value);
            }}>
              <label htmlFor="learn-guess-input">What's the translation for this word?</label>
              <input type="text" name='guessInput' id="learn-guess-input" required></input>
              <button type="submit">Submit your answer</button>
            </form>
          </section >
          : <Feedback />
        )}
        <div>
          <p>Your total score is: {this.context.totalScore}</p>
        </div>
        <p>You have answered this word correctly {this.context.wordCorrectCount} times</p>
        <p>You have answered this word incorrectly {this.context.wordIncorrectCount} times</p>
      </section>
    );
  }
};

export default LearningRoute;