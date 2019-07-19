import React,{Component} from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'

import Employee from './Employee'
import FormInput from './FormInput'

const ThemeContext = React.createContext('light');

class App extends Component {
   
  
  render(){
    return (
      <Provider store={store}>
      <div className="App" style={{margin:"auto",maxWidth: '523px'}}>
      <h1 >Employee Table</h1>
        <FormInput/>
        <Employee/>
      </div>
      </Provider>
    );
  }
}

export default App;
