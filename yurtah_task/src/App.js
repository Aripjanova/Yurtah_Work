import React from 'react';
import { BrowserRouter , Route  } from "react-router-dom";
import './App.css';
import {Provider} from 'react-redux'
import {createStore ,applyMiddleware} from 'redux'

import HomePage from '../src/components/HomePage/HomePage'
import AboutUs from '../src/components/AboutUs/AboutUs'
import '../src/assets/css/main.css'

const store=createStore(()=>[],{},applyMiddleware());

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/About" component={AboutUs} />
      </BrowserRouter>
      </Provider>

  );
}

export default App;
