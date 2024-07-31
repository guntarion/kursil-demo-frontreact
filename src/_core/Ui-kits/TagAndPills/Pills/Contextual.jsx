import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Badges, H5 } from '../../../../AbstractElements';
import { ContextualVariations, Danger, Dark, Info, Light, Primary, secondary, Success, Warning } from '../../../../Constant/index';

const ContextualPills = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{ContextualVariations}</H5>
        </CardHeader>
        <CardBody>
          <Badges attrBadge={{ color: 'primary', pill: true }}>{Primary}</Badges>
          <Badges attrBadge={{ color: 'secondary', pill: true }} >{secondary}</Badges>
          <Badges attrBadge={{ color: 'success', pill: true }} >{Success}</Badges>
          <Badges attrBadge={{ color: 'info', pill: true }} >{Info}</Badges>
          <Badges attrBadge={{ color: 'warning', pill: true }}>{Warning}</Badges>
          <Badges attrBadge={{ color: 'danger', pill: true }} >{Danger}</Badges>
          <Badges attrBadge={{ color: 'light txt-dark', pill: true }} >{Light}</Badges>
          <Badges attrBadge={{ color: 'dark tag-pills-sm-mb', pill: true }} >{Dark}</Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualPills;