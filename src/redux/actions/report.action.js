export const FETCH_LATEST_SPENDING = 'FETCH_LATEST_SPENDING';
export const GET_PROJECTED_SPENDING = 'GET_PROJECTED_SPENDING';
export const FETCH_LATEST_INCOME = 'FETCH_LATEST_INCOME';
export const GET_PROJECTED_INCOME = 'GET_PROJECTED_INCOME';

export const fetchLatestSpending = function () {
    return { type: FETCH_LATEST_SPENDING, payload: dummy_latest_spending }
}
export const getProjectedSpending = function() {
    return { type: GET_PROJECTED_SPENDING, payload: dummy_projected_spending }
}
export const fetchLatestIncome = function() {
    return { type: FETCH_LATEST_INCOME, payload: dummy_latest_income }
}
export const getProjectedIncome = function () {
    return { type: GET_PROJECTED_INCOME, payload: dummy_projected_income }
}

const dummy_latest_spending = [ 1, 2, 3 ];
const dummy_projected_spending = 4;
const dummy_latest_income = [5, 6, 7];
const dummy_projected_income = 8