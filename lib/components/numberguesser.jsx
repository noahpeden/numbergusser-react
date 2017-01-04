import React from 'react';
import ClearBtn from './ClearBtn';
import SubmitBtn from './SubmitBtn';
import ResetBtn from './ResetBtn';

export default class NumberGuesser extends React.Component {
  constructor(){
    super();
    this.state = {
      lastGuess: '',
      answer: null,
      guess: '',
      resetEnabled: false,
      min: 1,
      max: 100,
    };
    this.updateGuess = this.updateGuess.bind(this)
    this.clearBtn = this.clearBtn.bind(this)
    this.submitBtn = this.submitBtn.bind(this)
    this.resetBtn = this.resetBtn.bind(this)
  }

  componentDidMount(){
    this.setState({
      answer: this.randomNumber()
    })
  }

  randomNumber(){
    return Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
  }

  submitBtn(){
    this.setState({
      resetEnabled: true,
      lastGuess: this.state.guess
    })
    if(this.state.lastGuess === this.state.answer){
      this.setState({
        answer: this.randomNumber()
      })
    }
  }

  updateGuess(e){
    this.setState({
      guess: parseInt(e.target.value),
    })
  }

  clearBtn(){
    document.getElementById('inputGuess').value = ''
    this.setState({
      guess: ''
    })
  }

  increaseDifficulty(){
    this.setState({
      min: +this.state.min - 10,
      max: +this.state.max + 10,
    })
  }

  getNewNumber(){
    this.setState({
      answer: this.randomNumber()
    })
  }


  returnGuess(){
    if(this.state.lastGuess === ''){
      return(
        <p></p>
      )
    }
    if(this.state.lastGuess == this.state.answer){
      return(
        <p className="response">Correct, you win!</p>
      )
    }
    if(this.state.lastGuess < this.state.answer){
      return(
      <p className="response">Sorry, that guess is too low. Try a number between {this.state.min} and {this.state.max}.</p>
    )
  }
   if(this.state.lastGuess > this.state.answer){
    return (
      <p className="response">Sorry, that guess is too high. Try a number between {this.state.min} and {this.state.max}.</p>
    )
    }
    else{
      return(
        <p className="response">You need to guess a NUMBER. Try a number between {this.state.min} and {this.state.max}.</p>
      )
    }
  }

  resetBtn(){
    this.setState({
      answer: this.randomNumber(),
      lastGuess: '',
    })
    this.clearBtn()
  }

  render(){
    console.log(this.state.answer);
    return (
      <section className="NumberGuesser">
        <header><h1><span id="number">Number</span><span id="guesser">Guesser</span></h1></header>
        <div className="LastGuess">
          <article className="your-last-guess-text">Your last guess was...</article>
          <article className='last-guess'>{this.state.lastGuess}</article>
          <article>{this.returnGuess()}</article>
        </div>
        <div className="Controls">
          <ClearBtn
            buttonDisabled={!this.state.guess}
            clearBtn={this.clearBtn}
            updateGuess={this.updateGuess}
          />
          <SubmitBtn
            buttonDisabled={!this.state.guess}
            submitBtn = {this.submitBtn}
          />
          <ResetBtn
            resetDisabled = {!this.state.lastGuess}
            resetBtn = {this.resetBtn}
          />
        </div>
      </section>
    )
  }
}
