import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import DashboradApiService from '../../services/dashboard-api-service'
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../Button/Button'
import './AnswerForm.css'
class AnswerForm extends Component {
  static defaultProps = {
    onSubmitSuccess: () => { }
  }

  static contextType = LanguageContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { answer } = ev.target
    this.setState({ error: null })

    DashboradApiService.postGuess({
      answer: answer.value
    })
      .then(res => {
        answer.value = ''
        this.props.onSubmitSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='AnswerForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className="un" type="text" align="center" placeholder="Your answer">
          <Label htmlFor='learn-guess-input' className="guess">
            What's the translation for this word?
          </Label>
          <br></br>
          <Input
            ref={this.firstInput}
            id='learn-guess-input'
            name='answer'
            required
          />
        </div>      
        <Button className="submit" align="center" type='submit'>
          Submit your answer
        </Button>
      </form>
    )
  }
}

export default AnswerForm
