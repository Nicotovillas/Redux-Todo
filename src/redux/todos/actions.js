  export const setFilter = filter => {
    return(
        {
            type: 'FILTER',
            payload:{
                filter: filter
            }
        }
    )
  };

export const toggleTodo = index => {
    return(
        {
            type: 'TOGGLE_TODO',
            payload: index
        }
    )
};

  export const addTodo = (text) =>{
      return(
          {
              type: 'ADD_TODO',
              payload: {
                  text
              }
          }
      )

  }