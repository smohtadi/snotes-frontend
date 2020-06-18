import { combineReducers } from 'redux';
import { transactionReducer } from './transaction.reducer';
import { reportReducer } from './report.reducer';
import { balanceReducer } from './balance.reducer';

export default combineReducers({
    transactions: transactionReducer,
    report: reportReducer,
    balance: balanceReducer
});