import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Mail, DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { Badges, H5 } from '../../../../AbstractElements';
import { TagsWithIcon } from '../../../../Constant/index';

const TagWithIcon = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{TagsWithIcon}</H5>
        </CardHeader>
        <CardBody className="icons">
          <Badges attrBadge={{ color: 'primary', href: '#javascript' }} ><DollarSign /></Badges>
          <Badges attrBadge={{ color: 'secondary', href: '#javascript' }}><Headphones /></Badges>
          <Badges attrBadge={{ color: 'success', href: '#javascript' }}><Link /></Badges>
          <Badges attrBadge={{ color: 'info', href: '#javascript' }}><GitHub /></Badges>
          <Badges attrBadge={{ color: 'warning', href: '#javascript' }}><Award /></Badges>
          <Badges attrBadge={{ color: 'danger', href: '#javascript' }}><Activity /></Badges>
          <Badges attrBadge={{ color: 'light txt-dark', href: '#javascript' }}><Heart /></Badges>
          <Badges attrBadge={{ color: 'dark', href: '#javascript' }}><Mail /></Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;