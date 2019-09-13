import React, { Component } from 'react'
import LanguageContext from   '../../contexts/LanguageContext.js';
import DashboardService from '../../services/dashboard-api-service.js';
import AnswerForm from '../../components/AnswerForm/AnswerForm'

class LearningRoute extends Component {
  state = { error: null, head: {}, isAnswered: false, answerResponse: {}, answerValue : ''};
  componentDidMount(){
    this.fetchData()  
 }
 fetchData(){
   DashboardService.getHead()
   .then(data => {
     console.log(data)
     this.setState({ head: data })
   });
   
 }  
 handleSubmitSuccess = () => {
  const { location, history } = this.props
  const destination = (location.state || {}).from || '/'
  history.push(destination)
}

handleAnswerSubmit = (answerResponse, answerValue) => {
  console.log(answerResponse);
  this.setState({answerValue})
  this.setState({answerResponse});;
  this.setState({isAnswered : true});
}

moveToNextQuestion = () => {
  this.fetchData();
  this.setState({
    isAnswered: false
  })
}
  render() {
    
    return (
      <section>
        {this.state.isAnswered? 
          <div>
            {this.state.answerResponse.isCorrect ?
              <p>You were correct! :D</p>
            :
              <p>Good try, but not quite right :( the correct translation for {this.state.head.nextWord} was {this.state.answerResponse.answer} and you chose {this.state.answerValue}</p>
            }
            <button onClick={()=>this.moveToNextQuestion()}>try again</button>
          </div>:
          <>
          <div>
            <h2>Translate the word:</h2>
            <span>{this.state.head.nextWord}</span>
            <p>Your total score is: {this.state.head.totalScore}</p>
            <AnswerForm handleAnswerSubmit={this.handleAnswerSubmit} onSubmitSuccess={this.handleSubmitSuccess} />    
          </div>              
          <main>
            <h3>You have answered this word correctly {this.state.head.wordCorrectCount} times.</h3>
            <h3>You have answered this word incorrectly {this.state.head.wordIncorrectCount} times.</h3>   
          </main>  
          </>
        }
      </section>
    );
  }
}
LearningRoute.contextType = LanguageContext;
export default LearningRoute
