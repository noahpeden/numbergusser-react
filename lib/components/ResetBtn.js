import React from 'react';

export default class ResetBtn extends React.Component{
  render(){
    const { resetBtn, resetDisabled } = this.props
  return (
    <div>
      <button
        disabled={resetDisabled}
        onClick={resetBtn}>Reset Game
      </button>
  </div>
  )
  }
}
