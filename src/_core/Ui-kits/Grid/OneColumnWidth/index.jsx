import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5, P } from '../../../../AbstractElements';

const OneColumnWidthCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{'Setting one column width'}</H5>
        </CardHeader>
        <CardBody className="grid-showcase">
          <P>{'Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.'}</P>
          <Row>
            <Col className="col"><span>{'1 of 3'}</span></Col>
            <Col className="col-6"><span>{'2 of 3 (wider)'}</span></Col>
            <Col className="col"><span> {'3 of 3'}</span></Col>
          </Row>
          <Row>
            <div className="col"><span>{'1 of 3'}</span></div>
            <div className="col-5"><span> {'2 of 3 (wider)'}</span></div>
            <div className="col"><span>{'3 of 3'}</span></div>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OneColumnWidthCard;