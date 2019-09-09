import React, { Component } from 'react';
import UserContext from   '../../contexts/UserContext.js'
import DashboardService from '../../services/dashboard-api-service.js'
//import Button from '../../components/Button/Button'

class DashboardRoute extends Component {
  componentDidMount(){
     this.fetchData()
  }
  fetchData(){
    DashboardService.getLanguageAndWords()
    .then(data => {
      UserContext.setLanguage(data);
      //UserContext.setWords();
    });
  }
  render() {
    return (
      <section>
        
      </section>
    );
  }
}

export default DashboardRoute
