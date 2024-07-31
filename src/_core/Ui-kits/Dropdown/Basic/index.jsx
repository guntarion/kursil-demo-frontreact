import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { Action, AnotherAction, BasicDropdown, DropdownButton, SomethingElseHere } from '../../../../Constant/index';

const Basic = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{BasicDropdown}</H5>
        </CardHeader>
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown className="dropdown">
              <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }} >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href="#">{Action}</DropdownItem>
                <DropdownItem href="#">{AnotherAction}</DropdownItem>
                <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;