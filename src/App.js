import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'

import Employee from './Employee'
import FormInput from './FormInput'

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
    <h1 >Employee Table</h1>
      <FormInput/>
      <Employee/>
    </div>
    </Provider>
  );
}

export default App;
