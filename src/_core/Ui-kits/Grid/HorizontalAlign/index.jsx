import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { HorizontalAlignment } from '../../../../Constant/index';

const HorizontalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{HorizontalAlignment}</H5>
        </CardHeader>
        <CardBody className="grid-showcase grid-align">
          <p>{'Use flexbox alignment utilities to vertically and horizontally align columns.'}</p>
          <Row className="justify-content-start">
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-around">
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-between">
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
            <Col className="col-4"><span>{'One of two columns'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAlignCard;