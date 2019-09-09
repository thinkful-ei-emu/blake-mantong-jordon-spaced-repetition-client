import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import DashboardService from '../../services/dashboard-api-service.js'

class DashboardRoute extends Component {
  componentWillMount(){

  }
  fetchData(){
    DashboardService.getLanguageAndWords()
    .then(data => {
      console.log(data);
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
