import React from 'react';
import ReactDOM from 'react-dom';
import NumberGuesser from './components/numberguesser';
require('./reset.css');
require ('./styles.scss');

ReactDOM.render(<NumberGuesser />, document.getElementById('application'));
