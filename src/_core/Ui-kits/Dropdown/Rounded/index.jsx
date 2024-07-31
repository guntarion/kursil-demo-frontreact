import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { RoundedDropdown } from '../../../../Constant/index';
import CommonDropDown from '../common/CommonDropDown';
import { RoundedData } from '../../../../Data/Ui-kits';

const Rounded = () => {
    return (
        <Col sn="12" xl="12">
            <Card>
                <CardHeader className="pb-0">
                    <H5>{RoundedDropdown}</H5>
                </CardHeader>
                <CardBody>
                    <div className="dropdown-basic">
                        <Dropdown>
                            <ButtonGroup className="mb-0">
                                <Button className="dropbtn btn-round" color={'primary'}>Primary button<span><i className="icofont icofont-arrow-down"></i></span></Button>
                                <DropdownMenu className="dropdown-content">
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something Else Here</DropdownItem>
                                    <DropdownItem href="#">Separated Link</DropdownItem>
                                </DropdownMenu>
                            </ButtonGroup>
                        </Dropdown>
                        {RoundedData.map((items, i) =>
                            <CommonDropDown key={i} item={items} />
                        )}
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Rounded;