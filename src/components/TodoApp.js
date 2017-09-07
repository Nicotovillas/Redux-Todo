import React from 'react';

import Header from './Header';
import BottomNavigation from './BottomNavigation';
import Table from './Table';
import TodoInput from './TodoInput'

import Paper from 'material-ui/Paper';


class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <Header />
          <Table />
            <TodoInput/>
          <BottomNavigation />
        </Paper>
      </div>
    );
  }
}

export default TodoApp;
