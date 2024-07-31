import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Mail, DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { Badges, H5 } from '../../../../AbstractElements';
import { PillsWithIcon } from '../../../../Constant/index';

const PillWithIcon = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{PillsWithIcon}</H5>
        </CardHeader>
        <CardBody className="icons">
          <Badges attrBadge={{ color: 'primary', href: '#javascript', pill: true }} ><DollarSign /></Badges>
          <Badges attrBadge={{ color: 'secondary', href: '#javascript', pill: true }}><Headphones /></Badges>
          <Badges attrBadge={{ color: 'success', href: '#javascript', pill: true }}><Link /></Badges>
          <Badges attrBadge={{ color: 'info', href: '#javascript', pill: true }}><GitHub /></Badges>
          <Badges attrBadge={{ color: 'warning', href: '#javascript', pill: true }}><Award /></Badges>
          <Badges attrBadge={{ color: 'danger', href: '#javascript', pill: true }}><Activity /></Badges>
          <Badges attrBadge={{ color: 'light txt-dark', href: '#javascript', pill: true }}><Heart /></Badges>
          <Badges attrBadge={{ color: 'dark', href: '#javascript', pill: true }}><Mail /></Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;