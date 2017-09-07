import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import styles from '../styles'
import ListButton from 'material-ui/svg-icons/action/list';
import AssignmentButton from 'material-ui/svg-icons/action/assignment'
import DoneButton from 'material-ui/svg-icons/action/done';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todosActions from '../redux/todos/actions'

class myNavigationBar extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1} style={styles.bottomNavigation.item}
            >
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="All"
                        icon={<ListButton/>}
                        onClick={() => this.onSelectItem('SHOW_ALL',0)}
                    />
                    <BottomNavigationItem
                        label="Active"
                        icon={<AssignmentButton/>}
                        onClick={() => this.onSelectItem('SHOW_ACTIVE',1)}

                    />
                    <BottomNavigationItem
                        label="Completed"
                        icon={<DoneButton/>}
                        onClick={() => this.onSelectItem('SHOW_COMPLETED',2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }

    onSelectItem = (filter, index) => {
        this.setState({selectedIndex: index});
        this.props.actions.setFilter(filter)
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todosActions, dispatch)
});

export default connect(null, mapDispatchToProps) (myNavigationBar);