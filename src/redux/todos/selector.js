import { createSelector } from 'reselect';

const getFilter = state =>  state.todos.filter;

const getAllTodos = state => state.todos.items;

function getFilteredTodos(filter, items){
    switch(filter) {
        case 'SHOW_COMPLETED':
            return items.filter(item => item.completed);
        case 'SHOW_ACTIVE':
            return items.filter(item => !item.completed);
        default:
            return items;
    }
}

export const getTodos = createSelector([getFilter,  getAllTodos], getFilteredTodos);