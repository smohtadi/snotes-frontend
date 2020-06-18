import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function () {
  const style = {
    backgroundColor: 'white',
    height: '8vh',
    textAlign: 'center',
    boxShadow: '5px 5px 5px 0px #d1d1d1',
    marginBottom: '1rem',
  };

  return (
    <Container fluid style={style}>
      <Row className="h-100">
        <Col sm="8" className="d-flex justify-content-center align-items-center">
          <Link to="/">
            <i className="fas fa-dollar-sign"></i>Notes
          </Link>
        </Col>
        <Col sm="4" className="d-flex justify-content-center align-items-center">
          <Link to="/report">
            Burger
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
