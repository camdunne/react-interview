import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};

  const root = document.getElementById('content');
  ReactDOM.render(
    <Root />,
    root
  );
});