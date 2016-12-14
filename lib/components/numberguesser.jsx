import React from 'react';

export default class NumberGuesser extends React.Component {
  constructor(){
    super();
    this.state = {
      lastGuess: '',
      answer: 42,
      guess: ''
    };
  }
  handleSubmit(){
    console.log(this.state.guess);
    this.setState({
      lastGuess: this.state.guess
    })
  }
  updateGuess(e){
    console.log(e.target.value);
    this.setState({
      guess: e.target.value
    })
  }

  render(){
    return (
      <section className="NumberGuesser">
        <div className="LastGuess">
          <p>Your last guess was...</p>
          <p>{this.state.lastGuess}</p>
          <p>That number was too low. Try again.</p>
        </div>
        <div className="Controls">
          <input onChange={(e)=> this.updateGuess(e)} type="number" placeholder="Your best guess" />
          <button onClick={(e)=> this.handleSubmit()}>Guess</button>
          <button>Clear</button>
          <button>Reset Game</button>
        </div>
      </section>
    )
  }
}
