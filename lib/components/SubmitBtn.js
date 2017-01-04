import React from 'react';

export default class SubmitBtn extends React.Component{
  render(){
    const { submitBtn, buttonDisabled } = this.props
  return (
    <div>
      <button
        className="submitButton"
        disabled={buttonDisabled}
        onClick={submitBtn}>Guess
      </button>
  </div>
  )
  }
}
