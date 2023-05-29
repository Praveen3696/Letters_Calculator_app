// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target
    console.log(value)
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="calculate-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="inpute"
              onChange={this.onChangeInputPhrase}
              id="phraseText"
            />
            <p className="letters-count">No.of Letters: {inputPhrase.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
