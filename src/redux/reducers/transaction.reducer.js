export const transactionReducer = function (state = [{}], action) {
  let s;
  switch (action.type) {
    case 'FETCH_TRANSACTION':
      console.log('***' + action.payload);
      return action.payload;
    case 'FETCH_TRANSACTIONS':
      return action.payload;
    case 'DELETE_TRANSACTION':
      return state.filter((t) => t._id === action.payload._id);
    case 'UPDATE_TRANSACTION':
      s = state.filter((t) => t._id === action.payload._id);
      s.push(action.payload);
      return s;
    case 'CREATE_TRANSACTION':
      s = state.map((t) => t);
      s.push(action.payload);
      return s;
    default:
      return state;
  }
};
