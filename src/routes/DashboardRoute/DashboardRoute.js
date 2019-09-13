import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext.js';
import DashboardService from '../../services/dashboard-api-service.js';
import ListItem from '../../components/wordList/wordListItem.js';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    DashboardService.getLanguageAndWords()
      .then(res => {
        this.context.setLanguage(res.language)
        this.context.setWords(res.words)
      })
  }


  renderWordList = () => {
    const words = this.context.words.map((word, i) => <li key={i}><ListItem word={word} /></li>)
    return (
      <ul>
        {words}
      </ul>
    )
  }


  render() {
    return (
      <div>
        <h2>Start Practicing {this.context.language.name}</h2>
        <a href='/learn'>Start practicing</a>
        <h3>Words to practice</h3>
        {this.renderWordList()}
        <h4>Total correct answers: {this.context.language.total_score}</h4>
      </div>
    )
  }
}

export default DashboardRoute