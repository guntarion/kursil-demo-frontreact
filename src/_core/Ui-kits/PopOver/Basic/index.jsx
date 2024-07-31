import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { BasicExamples } from '../../../../Constant/index';
import CommonPopover from '../common/CommonPopover';
import { BasicPopoverData } from '../../../../Data/Ui-kits/index';

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{BasicExamples}</H5><span>{'lorem ipsum dolor sit amet, consectetur adipisicing elit'}</span>
        </CardHeader>
        <CardBody>
          <div  className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-1' }}>Click to toggle popover</Btn>
            <Popover
              placement='right'
              isOpen={popover}
              target='Popover-1'
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                And heres some amazing content. Its very engaging. Right?
              </PopoverBody>
            </Popover>
            {BasicPopoverData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;