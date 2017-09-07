import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddButton from 'material-ui/svg-icons/content/add';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../redux/input/actions';


class myHeader extends React.Component {
    render() {
        return (
            <AppBar
                title="Todo App"
                showMenuIconButton={false}
                iconElementRight={
                    <IconButton
                        onClick={this.props.actions.toggleOpen}>
                        <AddButton/>
                    </IconButton>
                }/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(itemActions, dispatch)
});

export default connect(null, mapDispatchToProps)(myHeader)