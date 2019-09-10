import React, { Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from   '../../contexts/UserContext.js';
import DashboardService from '../../services/dashboard-api-service.js';
import ListItem from '../../components/wordList/wordListItem.js';

class DashboardRoute extends Component {
  componentDidMount(){
     this.fetchData()  
  }
  fetchData(){
    DashboardService.getLanguageAndWords()
    .then(data => {
      this.context.setLanguage(data.language);
      this.context.setWords(data.words);
      console.log(this.context.words);
      console.log(this.context.language);
    });
  }
  renderWordList = () => {
    return this.context.words.map((word, index) => {
      return <li><ListItem word={word} key={index}/></li>
    })
  }
  redirect = (location = '/') => {
    this.props.history.push(location);
  }
  
  render() {
            return (
              
              
              <section>
                
                <div>
                  <h2>Learn {this.context.language.name}!</h2>
                  <h2>Total correct answers: {this.context.language.total_score}</h2>                 
                  <a href='/learn'>Start practicing</a>       
                </div>              
                <div>
                  <h3>Words to practice</h3>
                  <ul>{this.renderWordList()}</ul>
                </div>
                
              </section>
              
             
            )
    
  }
}
DashboardRoute.contextType = UserContext;
export default withRouter(DashboardRoute)
