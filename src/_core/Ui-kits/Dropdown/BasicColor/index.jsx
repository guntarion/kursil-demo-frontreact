import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { Action, AnotherAction, BasicColorDropdown, SomethingElseHere } from '../../../../Constant/index';
import { BasicColorData } from '../../../../Data/Ui-kits';
import CommonDropDown from '../common/CommonDropDown';

const BasicColor = () => {

  return (
    <Col sn="12" xl="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{BasicColorDropdown}</H5>
        </CardHeader>
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown>
              <div className="btn-group mb-0">
                <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }} >Action <span><i className="icofont icofont-arrow-down"></i></span></Btn>
                <DropdownMenu className="dropdown-content">
                  <DropdownItem href="#">{Action}</DropdownItem>
                  <DropdownItem href="#">{AnotherAction}</DropdownItem>
                  <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">{'Separated Link'}</DropdownItem>
                </DropdownMenu>
              </div>
            </Dropdown>
            {BasicColorData.map((items, i) =>
              <CommonDropDown key={i} item={items} />
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColor;