import storeState from '../store';

export default (state = storeState.todos, action) => {
  const { type, payload } = action;

  switch (type) {
      case 'TOGGLE_TODO':
          return {
              ...state,
              items: state.items.map(item => {
                  if (item.id === payload) {
                      return {
                          ...item,
                          completed: !item.completed
                      }
                  }
                  return item;
              })
          };

    case 'FILTER':
      return {
        ...state,
        filter: payload.filter,
      };
      case 'ADD_TODO':
          return({
              ...state,
              items: [...state.items,
                  {
                      id: state.lastId+1,
                      text: payload.text
                  }],
              lastId: state.lastId+1
          });
    default:
      return state;
  }
};
