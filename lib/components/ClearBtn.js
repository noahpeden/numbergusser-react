import React from 'react';

export default class ClearBtn extends React.Component{
  render(){
    const { clearBtn, updateGuess, buttonDisabled } = this.props
  return (
    <div>
      <input
        id="inputGuess"
        onChange={updateGuess}
        type="number, text"
        placeholder="Your best guess"
        />
      <button
        disabled={buttonDisabled}
        onClick={clearBtn}>Clear
      </button>
  </div>
  )
  }
}
