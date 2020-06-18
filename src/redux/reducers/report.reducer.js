import * as r from '../actions/report.action';

export const reportReducer = function (state = {}, action) {
  switch (action.type) {
    case r.FETCH_LATEST_INCOME:
      return { ...state, latest_income: action.payload };
    case r.FETCH_LATEST_SPENDING:
      return { ...state, latest_spending: action.payload };
    case r.GET_PROJECTED_INCOME:
      return { ...state, projected_income: action.payload };
    case r.GET_PROJECTED_SPENDING:
      return { ...state, projected_spending: action.payload };
    default:
      return state;
  }
};
