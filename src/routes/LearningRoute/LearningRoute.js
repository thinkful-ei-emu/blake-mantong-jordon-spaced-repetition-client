import React, { Component } from 'react'
import LanguageContext from   '../../contexts/LanguageContext.js';
import DashboardService from '../../services/dashboard-api-service.js';
import AnswerForm from '../../components/AnswerForm/AnswerForm'

class LearningRoute extends Component {
  state = { error: null, head: {} }
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
  render() {
    
    return (
      <section>
        <div>
          <h2>Translate the word:</h2>
          <span>{this.state.head.nextWord}</span>
          <p>Your total score is: {this.state.head.totalScore}</p>
          <AnswerForm onSubmitSuccess={this.handleSubmitSuccess} />    
        </div>              
        <div>
          <h3>You have answered this word correctly: {this.state.head.wordCorrectCount} times</h3>
          <h3>You have answered this word incorrectly: {this.state.head.wordIncorrectCount} times</h3>
          
        </div>  
      </section>
    );
  }
}
LearningRoute.contextType = LanguageContext;
export default LearningRoute
