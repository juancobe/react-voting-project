import React from 'react';
import ReactDOM from 'react-dom';
import {Voting} from './components/Voting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Voting />, div);
});
