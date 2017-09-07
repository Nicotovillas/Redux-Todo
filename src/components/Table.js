import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import styles from '../styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../redux/todos/actions';
import * as TodosSelector from '../redux/todos/selector';

class myTable extends React.Component {
  render() {
    return (
      <Table style={styles.table} multiSelectable={true} onCellClick={row => this.toggleTodo(row)}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn  style={{fontSize: '21px', color: 'black'}}>Todo List</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {this.props.items.map(this.renderItem)}
        </TableBody>
      </Table>
    );
  }

  renderItem = item =>
    <TableRow key={item.id} style={{color: item.completed ? '#8fcc88' : '#c46752'}}>
      <TableRowColumn>
        {item.text}
      </TableRowColumn>
    </TableRow>;

    toggleTodo = (index) => this.props.actions.toggleTodo(index);

}


const mapStateToProps = state => ({
    items: TodosSelector.getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps)(myTable)