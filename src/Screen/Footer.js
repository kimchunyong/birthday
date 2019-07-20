import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

export default function Footer() {
  return (
    <Row>
      <Col className="app-fluid app-footer d-flex justify-content-center align-items-center" >
        <p className="mb-0">
          <small className="text-muted">
            김지율 첫 돌잔치!!
          </small>
        </p>
      </Col>
    </Row>
  );
}
