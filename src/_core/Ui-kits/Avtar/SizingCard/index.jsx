import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image } from '../../../../AbstractElements';
import { Sizing } from '../../../../Constant/index';

const SizingCard = () => {
  return (
    <Col lg='6'>
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Sizing}</H5>
        </CardHeader>
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-100 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-90 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-80 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-70 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-60 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-50 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-40 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-30 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
              <div className="avatar"><Image attrImage={{ body: true, className: 'img-20 rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '#' }} /></div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizingCard;