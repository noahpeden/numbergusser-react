import React from 'react';

export default class NumberGuesser extends React.Component {
  constructor(){
    super();
    this.state = {
      lastGuess: '',
      answer: this.randomNumber(),
      guess: ''
    };
  }

  randomNumber(){
  let min = 1;
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleSubmit(){
    console.log(this.state.answer);
    this.setState({
      lastGuess: this.state.guess
    })
  }
  updateGuess(e){
    this.setState({
      guess: e.target.value
    })
  }

  clearBtn(e){
    this.refs.inputGuess.value = '';
    }

  returnGuess(){
    if(this.state.lastGuess === ''){
      return(
        <p></p>
      )
    }
    if(this.state.lastGuess == this.state.answer){
      return(
        <p>Correct, you win!</p>
      )
    }
    if(this.state.lastGuess < this.state.answer){
      return(
      <p>"Sorry, that guess is too low. Try a higher number."</p>
    )
  }
   if(this.state.lastGuess > this.state.answer){
    return (
      <p>"Sorry, that guess is too high. Try a lower number."</p>
    )
    }
  }

  resetBtn(){
    this.setState({
      answer: this.randomNumber(),
      lastGuess: ''
    })
    this.clearBtn()
  }



  render(){
    return (
      <section className="NumberGuesser">
        <div className="LastGuess">
          <article>Your last guess was...</article>
          <article>{this.state.lastGuess}</article>
          <article>{this.returnGuess()}</article>
        </div>
        <div className="Controls">
          <input ref='inputGuess' onChange={(e) => this.updateGuess(e)} type="number" placeholder="Your best guess" />
          <button onClick={(e) => this.handleSubmit()}>Guess</button>
          <button onClick={(e) => this.clearBtn(e)}>Clear</button>
          <button onClick={(e) => this.resetBtn(e)}>Reset Game</button>
        </div>
      </section>
    )
  }
}
