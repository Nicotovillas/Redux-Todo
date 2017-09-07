import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger({
    predicate: true,
    collapsed: true,
    duration: true,
    diff: true
});

export default createStore(reducers, applyMiddleware(thunk,logger))