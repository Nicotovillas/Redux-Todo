import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todosActions from '../redux/todos/actions';
import * as itemActions from '../redux/input/actions';

class myDialog extends React.Component {

    state = {
        textFieldValue: ''
    };

    _onChange = event => this.setState({
        textFieldValue: event.target.value
    });

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this._toggleOpen}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.addTodo}
            />,
        ];
        const {openDialog} = this.props;
        return (
            <div>
                <Dialog
                    title="Add Todos"
                    actions={actions}
                    modal={true}
                    open={openDialog}
                >
                    <TextField
                        hintText="Todo"
                        value={this.state.textFieldValue}
                        onChange={this._onChange}
                    />
                </Dialog>
            </div>
        );
    }


    _toggleOpen = () => this.props.actions.toggleOpen();


    addTodo = () => {
        if(this.state.textFieldValue.length > 0){
    this.props.actions.addTodo(this.state.textFieldValue);
        }
        this._toggleOpen();
        this.setState({textFieldValue: ''})
    }
}



const mapStateToProps = state => ({
    openDialog: state.input.open
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...itemActions,
        ...todosActions
    }, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps)(myDialog)