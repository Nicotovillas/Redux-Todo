import storeState from '../store';

export default (state = storeState.input, action) => {
  const { type } = action;

  switch (type) {
      case 'TOGGLE_OPEN':
      return ({
          ...state,
          open: !state.open
      });
    default:
      return state;
  }
};
