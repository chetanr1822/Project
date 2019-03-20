export const detailedViewReducer = (state = {items:[]}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return Object.assign({}, state, {
        items: action.items
      });
    case 'FETCH_DATA_ERROR':
      return [];
    default:
      return state;
  }
};
