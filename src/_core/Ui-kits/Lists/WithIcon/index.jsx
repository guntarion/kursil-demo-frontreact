import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, LI, UL } from '../../../../AbstractElements';
import { WithIcon } from '../../../../Constant/index';

const WithIcons = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{WithIcon}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-save-alt"></i>{'Cras justo odio'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-target"></i>{'Dapibus ac facilisis in'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-mobile"></i>{'Morbi leo risus'}</LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}><i className="icon-shopping-cart-full"></i>{'Vestibulum at eros'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
