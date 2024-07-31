import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import H5 from '../../../../CommonElements/Headings/H5Element';
import { VaryingModalContent } from '../../../../Constant/index';
import ModalButton from './common/ModalButton';

const VaryingContent = () => {

  return (
    <Col sm="12">
      <Card>
        <CardHeader>
          <H5>{VaryingModalContent}</H5>
        </CardHeader>
        <CardBody className="btn-showcase">
          <ModalButton btnText='Open modal for @mdo' defaultVal='@fat' />
          <ModalButton btnText='Open modal for @fat' defaultVal='@Mat' />
          <ModalButton btnText='Open modal for @getbootstrap' defaultVal='@getbootstrap' />
        </CardBody>
      </Card>
    </Col>

  );
};

export default VaryingContent;