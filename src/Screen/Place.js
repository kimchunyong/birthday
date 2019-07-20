import React from 'react';
import {
  Row, Col,
} from 'reactstrap';

import { Map } from '../Component';

export default function Place(props) {
  const {
    name
  } = props.config.wedding.place;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <h3>{name}</h3>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Map config={props.config.wedding.place} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
