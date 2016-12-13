import React from 'react';

export default class NumberGuesser extends React.Component {
  constructor(){
    super();
    this.state = {
      lastGuess: null,
      answer: 42
    };
  }
  render(){
    return (
      <section className="NumberGuesser">
        <div className="LastGuess">
          <p>Your last guess was...</p>
          <p>13</p>
          <p>That number was too low. Try again.</p>
        </div>
        <div className="Controls">
          <input type="number" placeholder="Your best guess" />
          <button>Guess</button>
          <button>Clear</button>
          <button>Reset Game</button>
        </div>
      </section>
    )
  }
}
