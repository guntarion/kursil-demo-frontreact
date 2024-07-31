import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { OffsetToTooltip } from '../../../../Constant/index';
import CommonPopover from '../common/CommonPopover';
import { OffsetPopoverData } from '../../../../Data/Ui-kits';

const Offset = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{OffsetToTooltip}</H5><span>{'lorem ipsum dolor sit amet, consectetur adipisicing elit'}</span>
        </CardHeader>
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-12' }}>20px 20px</Btn>
            <Popover
              placement='top'
              isOpen={popover}
              target='Popover-12'
              offset={[20, 20]}
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </Popover>
            {OffsetPopoverData.map((popover, i) => {
              return <CommonPopover key={i} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col >
  );
};

export default Offset;