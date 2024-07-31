import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image } from '../../../../AbstractElements';
import { Ratio } from '../../../../Constant/index';

const ShapeCard = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Ratio}</H5>
        </CardHeader>
        <CardBody>
          <div  className="avatar-showcase">
            <div className="avatars">
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-100 b-r-8', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-90 b-r-30', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-80 b-r-35', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-70 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-60 b-r-25', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-50 b-r-15', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapeCard;