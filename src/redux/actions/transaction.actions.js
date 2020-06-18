export const fetchTransaction = function(id) {
    return {
        type: 'FETCH_TRANSACTION',
        payload: dummy.filter(t => t._id === id)
    };
}

export const fetchTransactions = function() {
    return {
        type: 'FETCH_TRANSACTIONS',
        payload: dummy
    };
}

export const deleteTransaction = function(transactionID) {
    return {
        type: 'DELETE_TRANSACTION',
        payload: transactionID
    };
}

export const createTransaction = function(transaction) {
    return {
        type: 'CREATE_TRANSACTION',
        payload: transaction
    }
}

export const updateTransaction = function (transaction) {
    return {
        type: 'UPDATE_TRANSACTION',
        payload: transaction
    }
}

const dummy = [
    {
        _id: '1',
        description: 'pizza',
        category: 'Dining',
        type: 'Debit',
        amount: 100,
        date: '2019-04-30'
    },
    {
        _id: '2',
        description: 'salary',
        category: 'other',
        type: 'Credit',
        amount: 200,
        date: '2020-07-01'
    },
    {
        _id: '3',
        description: 'laundry',
        date: '2020-03-15',
        category: 'cleaning',
        type: 'Debit',
        amount: 40
    }
]