import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'

import App from './App';
import NotFound from './components/NotFound'
import './index.css';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        {/* <Match pattern="/books/:bookId" component={ModalTest} /> */}
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Routes />,
  document.getElementById('root')
);
