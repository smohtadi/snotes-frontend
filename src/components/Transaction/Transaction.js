import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Form, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTransaction } from '../../redux/actions/transaction.actions';

import './transaction.css';

const Transaction = function ({ transaction }) {
  return (
    <Link to={`/transaction/${transaction._id}`}>
      <Card className="card__container">
        <Card.Body>
          <Row>
            <Col xs="8">
              <p className="card__heading">{transaction.description}</p>
              <p className="card__subheading">{transaction.category}</p>
            </Col>
            <Col xs="4">
              <p className="card__heading">{transaction.amount}</p>
              <p className="card__subheading">{transaction.date}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};

const Edit = function (props) {
  const id = props.match.params.id;
  const { fetchTransaction } = props;
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  useEffect(() => {
    fetchTransaction(id);
  }, [fetchTransaction, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(amount + " " + description + " " + category + " " + type);
  }
  const cats = [
    'Transport',
    'Education',
    'Entertainment',
    'Financial',
    'Dining',
    'Grocieries',
    'Health Care',
    'Fitness',
    'Home',
    'Income',
    'Charity',
    'Gift',
    'Personal Care',
    'Pets',
    'Taxes',
    'Travel',
    'Shopping',
  ].sort();
  return (
    <Container className="bg-white shadow p-3">
      <h1 className="mb-5">Edit Transaction</h1>
      <form onSubmit={onSubmit}>
        <Row>
          <Col sm="12" md="6">
            <Form.Group className="form__group">
              <label className="form__label">Amount</label>
              <Form.Control
                className="form__control"
                type="number"
                min="0"
                value={ amount !== null ? amount : props.transactions[0].amount || '' }
                onChange={ e => setAmount( e.target.value ) }
              />
            </Form.Group>
          </Col>
          <Col sm="12" md="6">
            <Form.Group className="form__group">
              <label className="form__label">Description</label>
              <Form.Control
                className="form__control"
                type="text"
                value={ description !== null ? description : props.transactions[0].description || ''}
                onChange = { e => setDescription( e.target.value ) }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm="12" md="6">
            <Form.Group className="form__group">
              <label className="form__label">Type</label>
              <Form.Control
                className="form__control text-left"
                as="select"
                onChange = { e => setType( e.target.value ) }
                value = { type !== null ? type : props.transactions[0].type || '' }
              >
                <option value={'Credit'}>Credit</option>
                <option value={'Debit'}>Debit</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm="12" md="6">
            <Form.Group className="form__group">
              <label className="form__label">Category</label>
              <Form.Control
                className="form__control"
                as="select"
                value = { category !== null ? category : props.transactions[0].category || ''}
                onChange = { e => setCategory( e.target.value ) }
              >
                {cats.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
const mapStateToProps = function (state, ownProps) {
  return { transactions: state.transactions };
};
const EditRedux = connect(mapStateToProps, { fetchTransaction })(Edit);

Transaction.Edit = EditRedux;
export default Transaction;
