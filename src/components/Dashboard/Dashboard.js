import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Container, Table } from 'react-bootstrap';

import Transaction from '../Transaction/Transaction';
import Balance from '../Balance/Balance';
import { fetchTransactions } from '../../redux/actions/transaction.actions';
import { fetchBalance } from '../../redux/actions/balance.action';
import {
  fetchLatestIncome,
  fetchLatestSpending,
  getProjectedIncome,
  getProjectedSpending,
} from '../../redux/actions/report.action';

// @TODO: GET Suggested Savings

const Report = function ({ report }) {
  return (
    <Table stripped>
      <tbody>
        <tr>
          <td>Spendings in the last 3 months</td>
          <td>{report.latest_spending}</td>
        </tr>
        <tr>
          <td>Projected spending for next month:</td>
          <td>{report.projected_spending}</td>
        </tr>
        <tr>
          <td>Income in the last 3 months</td>
          <td>{report.latest_income}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const Dashboard = function (props) {
  const {
    fetchTransactions,
    fetchBalance,
    fetchLatestIncome,
    fetchLatestSpending,
    getProjectedSpending,
    getProjectedIncome,
  } = props;
  const { transactions } = props;
  const [showReport, setReport] = useState(false);
  useEffect(() => {
    fetchBalance();
    fetchLatestIncome();
    fetchLatestSpending();
    fetchTransactions();
    getProjectedIncome();
    getProjectedSpending();
  }, [
    fetchBalance(),
    fetchLatestIncome(),
    fetchLatestSpending(),
    fetchTransactions(),
    getProjectedIncome(),
    getProjectedSpending(),
  ]);

  return (
    <Container>
      <Row>
        <Col md="5" sm="12" className="order-sm-2 order-md-1 mb-3">
          {transactions.map((t, k) => {
            return <Transaction key={k} transaction={t} />;
          })}
        </Col>
        <Col md="7" sm="12" className="order-sm-1 order-md-2 mb-3">
          <Card className="card__container">
            <Card.Body>
              <Balance balance={props.balance} />
              <button
                className="btn"
                style={{ color: 'blue' }}
                onClick={(e) => setReport(!showReport)}
              >
                Show Report &rsaquo;&rsaquo;
              </button>
              {showReport ? <Report report={props.report} /> : null}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = function (state, ownProps) {
  return {
    transactions: state.transactions,
    report: state.report,
    balance: state.balance,
  };
};

export default connect(mapStateToProps, {
  fetchBalance,
  fetchLatestIncome,
  fetchLatestSpending,
  fetchTransactions,
  getProjectedIncome,
  getProjectedSpending,
})(Dashboard);
