import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { LinksAndButtons } from '../../../../Constant/index';

const LinksButtons = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{LinksAndButtons}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript', active: true }} >{'Cras justo odio'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{'Dapibus ac facilisis in'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{'Morbi leo risus'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{'Porta ac consectetur ac'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript', disabled: true }} >{'Vestibulum at eros'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinksButtons;
