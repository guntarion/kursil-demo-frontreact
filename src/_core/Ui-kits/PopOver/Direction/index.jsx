import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { Direction } from '../../../../Constant/index';
import CommonPopover from '../common/CommonPopover';
import { DirectionData } from '../../../../Data/Ui-kits';

const Directions = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Direction}</H5><span>{'lorem ipsum dolor sit amet, consectetur adipisicing elit'}</span>
        </CardHeader>
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-4' }}>Popover on top</Btn>
            <Popover
              placement='top'
              isOpen={popover}
              target='Popover-4'
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </Popover>
            {DirectionData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;