import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LandingPresentional = ({ history }) => {
  const url = 'http://localhost:5000/api/v0/user/auth/google';
  return (
    <Container style={{ height: '75vh' }}>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Card className="shadow" style={{ width: '25rem' }}>
          <Card.Body>
            <h3 className="text-center mb-5">Sign in to $Notes</h3>
            <Button              
              className="w-100 p-3 bg-primary"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = url;
              }}
            >
              <Row>
                <Col sm={2} style={{ borderRight: '1px solid white' }}>
                  <svg
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </Col>
                <Col sm={10}>
                  <span style={{ color: 'white' }}>Continue With Google</span>
                </Col>
              </Row>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default LandingPresentional;
