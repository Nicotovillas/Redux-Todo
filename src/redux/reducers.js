import {combineReducers} from 'redux';
import todosReducer from './todos/reducer';
import inputReducer from './input/reducer';

const reducers = combineReducers({
    todos: todosReducer,
    input: inputReducer
});

export default reducers;