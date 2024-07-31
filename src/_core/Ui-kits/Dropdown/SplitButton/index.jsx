import React from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { DropdownSplitButton } from '../../../../Constant/index';
import SplitButtonDropdown from './SplitButtonDropdown';
import { SplitData } from '../../../../Data/Ui-kits';

const SplitButton = () => {

  return (
    <Col sn="12" xl="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{DropdownSplitButton}</H5>
        </CardHeader>
        <CardBody>
          <div className="dropdown-basic">
            <div className="btn-group">
              <Btn attrBtn={{ color: 'primary' }} >Primary Button</Btn>
              <Dropdown className="separated-btn">
                <Btn attrBtn={{ color: 'primary' }} ><i className="icofont icofont-arrow-down"></i></Btn>
                <DropdownMenu className="dropdown-content digits">
                  <DropdownItem href="#">Link 1</DropdownItem>
                  <DropdownItem href="#">Link 1</DropdownItem>
                  <DropdownItem href="#">Link 1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {SplitData.map((items, i) =>
              <SplitButtonDropdown key={i} item={items} />
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButton;