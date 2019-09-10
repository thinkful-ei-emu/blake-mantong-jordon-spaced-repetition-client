import React, { Component } from 'react';
import UserContext from   '../../contexts/UserContext.js'
import DashboardService from '../../services/dashboard-api-service.js'
//import Button from '../../components/Button/Button'

class DashboardRoute extends Component {
 
  
  
  componentDidMount(){
    
    //let value = this.context;
     this.fetchData()
     
  }
  fetchData(){
    DashboardService.getLanguageAndWords()
    .then(data => {
      console.log(data)
      this.context.setLanguage(data.language);
      this.context.setWords(data.words);
    });
  }
  render() {
    
            return (
              
              <section>
                
              </section>
            )
    
  }
}
DashboardRoute.contextType = UserContext;
export default DashboardRoute
