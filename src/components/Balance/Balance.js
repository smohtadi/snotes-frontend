import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Balance = function( props ) {
  return (
    <Row>
      <Col sm="8" >
        <p style={ { fontSize:'1.2rem', fontWeight: 'bold' } }>Balance</p>
      </Col>
      <Col sm="4">
        <p style={ { fontSize:'1.2rem' }}>$1000</p>
      </Col>
    </Row>
  );
}

export default Balance;