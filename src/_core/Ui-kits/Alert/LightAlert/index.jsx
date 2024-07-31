import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H5 } from '../../../../AbstractElements';
import { LightAlerts } from '../../../../Constant/index';

const LightAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className="pb-0">
          <H5>{LightAlerts}</H5><span>{'Alerts are available for any length of text, as well as an optional dismiss button.'}</span>
        </CardHeader>
        <CardBody>
          <Alerts attrAlert={{ color: 'primary' }}>
            {'This is a info alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'secondary' }} >
            {'This is a light alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'success' }} >
            {'This is a success alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'info' }} >
            {'This is a danger alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'warning' }} >
            {'This is a secondary alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'danger' }} >
            {'This is a warning alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'light' }} >
            {'This is a dark alert—check it out!'}
          </Alerts>
          <Alerts attrAlert={{ color: 'dark' }} >
            {'This is a dark alert—check it out!'}
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;