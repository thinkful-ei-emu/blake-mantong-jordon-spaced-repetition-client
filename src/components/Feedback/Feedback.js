import React, { Component } from 'react'
import ProgressContext from '../../contexts/ProgressContext';


export default class Feedback extends Component {
    static contextType = ProgressContext;

    handleClick = () => {
        this.context.setIsFeedbackDisplayed(false);
    }

    renderFeedback = () => {
        if (this.context.isCorrect) {
            return <h2>You were correct!</h2>
        } else {
            return <h2>Good try, but incorrect.</h2>
        }
    }

    render() {
        return (
            <section>
                <div>
                    {this.renderFeedback()}
                    <p> the correct translation for <span>{this.context.prevWord}</span> was {this.context.answer} and you chose {this.context.guess}</p>
                    <button onClick={this.handleClick}>Try another word</button>
                </div>
            </section>
        )
    }
}
