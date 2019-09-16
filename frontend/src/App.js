import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
