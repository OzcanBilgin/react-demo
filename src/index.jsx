import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
  document.getElementById('root'),
);
