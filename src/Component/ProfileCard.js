import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function ProfileCard(props) {
  const {
    name,
    phone,
    facebook,
    father,
    mother,
  } = props.profile;
  return (
    <Row
      style={{
        border: '1px solid #FFC107',
        padding: '0 0 20px 0',
        borderLeft: '0',
        borderRight: '0',
      }}>
      <Col>
        <Row className="pt-4">
          <Col>
            <p className="mb-1">{father},{mother}</p>
            <h4>{name}</h4>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col>
            <a className="btn btn-secondary m-1" role="button" href={`tel:${phone}`}>
              <FontAwesome name="phone" />
            </a>
            <a className="btn btn-secondary m-1" role="button" href={`sms:${phone}`}>
              <FontAwesome name="envelope" />
            </a>
            {facebook
              ? <a className="btn btn-secondary m-1" role="button" href={facebook} target="_blank" rel="noopener noreferrer"><FontAwesome name="facebook-square" /></a>
              : ''}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
