import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image, LI, UL } from '../../../../AbstractElements';
import { Groups } from '../../../../Constant/index';


const GroupCard = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Groups}</H5>
        </CardHeader>
        <CardBody>
          <div className="avatar-showcase">
            <div className="customers d-inline-block avatar-group">
              <UL attrUL={{ as: 'ul', className: 'simple-list flex-row' }}>
                <LI attrLI={{ className: 'd-inline-block' }} ><Image attrImage={{ body: true, className: 'img-70 rounded-circle', src: require('../../../../assets/images/user/3.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-70 rounded-circle', src: require('../../../../assets/images/user/5.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-70 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '' }} /></LI>
              </UL>
            </div>
            <div className="customers d-inline-block avatar-group">
              <UL attrUL={{ as: 'ul', className: 'simple-list flex-row' }}>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-50 rounded-circle', src: require('../../../../assets/images/user/3.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-50 rounded-circle', src: require('../../../../assets/images/user/5.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-50 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '' }} /></LI>
              </UL>
            </div>
            <div className="customers d-inline-block avatar-group">
              <UL attrUL={{ as: 'ul', className: 'simple-list flex-row' }}>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-40 rounded-circle', src: require('../../../../assets/images/user/3.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-40 rounded-circle', src: require('../../../../assets/images/user/5.jpg'), alt: '' }} /></LI>
                <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ body: true, className: 'img-40 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '' }} /></LI>
              </UL>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupCard;