import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image, LI, UL } from '../../../../AbstractElements';
import { WithImages } from '../../../../Constant/index';

const WithImage = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{WithImages}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, src: require('../../../../assets/images/user/1.jpg'), alt: '' }} />
              {'Cras justo odio'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, src: require('../../../../assets/images/user/1.jpg'), alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, src: require('../../../../assets/images/user/1.jpg'), alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}>
              <Image attrImage={{ body: true, src: require('../../../../assets/images/user/1.jpg'), alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImage;
