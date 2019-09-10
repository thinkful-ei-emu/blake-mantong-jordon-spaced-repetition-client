import React, { Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from   '../../contexts/UserContext.js';
import DashboardService from '../../services/dashboard-api-service.js';
import ListItem from '../../components/wordList/wordListItem.js';
import Button from '../../components/Button/Button.js';

class DashboardRoute extends Component {
 
  
  
  componentDidMount(){
    
    //let value = this.context;
     this.fetchData()
     
  }
  fetchData(){
    DashboardService.getLanguageAndWords()
    .then(data => {
      this.context.setLanguage(data.language);
      this.context.setWords(data.words);
      console.log(this.context.words);
      console.log(this.context.languageName);
    });
  }
  renderWordList = () => {
    return this.context.words.map(word => {
      return <ListItem word={word}/>
    })
  }
  redirect = (location = '/') => {
    this.props.history.push(location);
  }
  render() {
    
            return (
              <section>
                <div>
                  <h3>Learn {this.context.language} !</h3>
                </div>
                <div>
                  <p>start practicing now</p>
                  <button onClick={this.redirect('/learn')}/>
                </div>
                <div>
                  <h2>Your Words List</h2>
                  {this.renderWordList()}
                </div>
                
              </section>
            )
    
  }
}
DashboardRoute.contextType = UserContext;
export default withRouter(DashboardRoute)
