import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { FlushStyle } from '../../../../Constant/index';

const FlushStyles = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{FlushStyle}</H5>
        </CardHeader>
        <CardBody>
          <UL attrUL={{ className: 'list-group-flush' }}>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Morbi leo risus'}</LI>
            <LI>{'Porta ac consectetur ac'}</LI>
            <LI>{'Vestibulum at eros'}</LI>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyles;
