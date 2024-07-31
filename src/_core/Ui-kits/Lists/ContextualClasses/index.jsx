import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { ContextualClasses } from '../../../../Constant/index';

const ContextualClass = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{ContextualClasses}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item' }} >{'Dapibus ac facilisis in'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-primary' }}  >{'This is a primary list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-secondary' }} >{'This is a secondary list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-success' }}  >{'This is a success list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-danger' }}  >{'This is a danger list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-warning' }}  >{'This is a warning list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-info' }}  >{'This is a info list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-light' }}  >{'This is a light list group item'}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-dark' }}  >{'This is a dark list group item'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
