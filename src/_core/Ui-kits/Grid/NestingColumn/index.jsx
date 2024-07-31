import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5, P } from '../../../../AbstractElements';
import { NestingColumn } from '../../../../Constant/index';

const NestingColCard = () => {

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{NestingColumn}</H5>
        </CardHeader>
        <CardBody className="grid-showcase">
          <P>{'Use flexbox alignment utilities to vertically and horizontally align columns.'}</P>
          <Row>
            <Col className="col-sm-9"><span>{'Level 1: .col-sm-9'}</span>
              <Row>
                <Col className="col-8 col-sm-6"><span>{'Level 2: .col-8 .col-sm-6'}</span></Col>
                <Col className="col-4 col-sm-6"><span>{'Level 2: .col-4 .col-sm-6'}</span></Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingColCard;