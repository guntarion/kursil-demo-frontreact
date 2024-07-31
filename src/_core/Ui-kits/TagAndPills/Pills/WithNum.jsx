import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Badges, H5 } from '../../../../AbstractElements';
import { PillsWithNumber } from '../../../../Constant/index';

const PillWithNum = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{PillsWithNumber}</H5>
        </CardHeader>
        <CardBody className="card-body digits">
          <Badges attrBadge={{ color: 'primary', pill: true }}>{'1'}</Badges>
          <Badges attrBadge={{ color: 'secondary', pill: true }}  >{'2'}</Badges>
          <Badges attrBadge={{ color: 'success', pill: true }}  >{'3'}</Badges>
          <Badges attrBadge={{ color: 'info', pill: true }}  >{'4'}</Badges>
          <Badges attrBadge={{ color: 'warning', pill: true }}  >{'5'}</Badges>
          <Badges attrBadge={{ color: 'danger', pill: true }}  >{'6'}</Badges>
          <Badges attrBadge={{ color: 'light txt-dark', pill: true }}  >{'7'}</Badges>
          <Badges attrBadge={{ color: 'dark', pill: true }}  >{'8'}</Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNum;