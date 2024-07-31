import { Badges, Btn, H5 } from '../../../AbstractElements';
import { Messages, Notification } from '../../../Constant/index';
import React from 'react';
import { CardBody, CardHeader, Col } from 'reactstrap';
import { Mail, Bell, Settings, Music, AlertTriangle, AlertCircle } from 'react-feather';

const ButtonPart = () => {
  return (
    <Col sm="12" xl="6">
      <div className="card height-equal">
        <CardHeader className='pb-0'>
          <H5>{'Badges as part buttons'}</H5>
        </CardHeader>
        <CardBody>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'primary' }} >
              {Messages} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><Mail /></Badges>
            </Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'secondary', type: 'button' }} >
              {Notification} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><Bell /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'success' }} >{'Update available'} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><Settings /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'info' }} >{'Playing Now'} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><Music /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'warning' }} >{'1.2 GB Used'} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><AlertTriangle /></Badges></Btn>
          </div>
          <div>
            <Btn attrBtn={{ color: 'danger' }} >{'Alert'} <Badges attrBadge={{ color: 'light', pill: true, className: 'rounded-pill text-dark' }} ><AlertCircle /></Badges></Btn>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonPart;