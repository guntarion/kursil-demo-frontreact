import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { BasicModal } from '../../../../Constant/index';
import BasicBtn from './BasicButton';
import GridModal from './GridButton';
import ScrollBtn from './ScrollButton';
import TooltipModal from './Tooltip&Popover';
import VerticalBtn from './VerticalButton/VerticalBtn';

const BasicModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{BasicModal}</H5>
        </CardHeader>
        <CardBody className="btn-showcase">
          <BasicBtn />
          <ScrollBtn />
          <VerticalBtn />
          <TooltipModal />
          <GridModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModals;