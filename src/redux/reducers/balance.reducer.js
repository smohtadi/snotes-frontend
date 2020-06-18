import * as b from '../actions/balance.action';

export const balanceReducer = function(state = 0, action) {
    switch(action.type) {
        case b.FETCH_BALANCE:
            return action.payload;
        default:
            return state;
    }
}