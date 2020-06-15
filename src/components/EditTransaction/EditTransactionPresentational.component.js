import React from 'react';

const EditTransactionPresentational = ({
  amount,
  description,
  type,
  onChangeAmount,
  onChangeDescription,
  onChangeType,
  onSubmit,
}) => {
  return (
    <div>
      <h1>Edit Transaction</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Description:</label>
          <input
            className='form-control'
            type='text'
            onChange={onChangeDescription}
            placeholder='Enter description'
            value={description}
          />
        </div>
        <div className='form-group'>
          <label>Type</label>
          <select
            className='form-control'
            onChange={onChangeType}
            value={type}>
            <option value='Debit'>Debit</option>
            <option value='Credit'>Credit</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Amount</label>
          <input
            className='form-control'
            type='text'
            onChange={onChangeAmount}
            placeholder='Enter amount'
            value={amount}
          />
        </div>
        <div className='form-group'>
          <input className='btn btn-primary' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default EditTransactionPresentational;