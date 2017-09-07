import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/configureStore';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <TodoApp />
        </div>
      </Provider>
    );
  }
}

export default App;
