import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { DefaultList } from '../../../../Constant/index';

const DefaultLists = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{DefaultList}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Morbi leo risus'}</LI>
            <LI>{'Porta ac consectetur ac'}</LI>
            <LI>{'Vestibulum at eros'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
