import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { HTMLContent } from '../../../../Constant/index';
import CommonPopover from '../common/CommonPopover';

const HtmlContents = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  const Popoverbody = <>{'Just add'} <code>{'data-html=\'true\''}</code>{'attribute and you can purse'}<span style={{ marginLeft: '3px', marginRight: '3px' }}><b>{'html'}</b></span>{'code'}</>;
  const Data = [
    {
      id: 9,
      placement: 'right',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on right'
    },
    {
      id: 10,
      placement: 'bottom',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on bottom'
    },
    {
      id: 11,
      placement: 'left',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on left'
    },
  ];
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{HTMLContent}</H5><span>{'lorem ipsum dolor sit amet, consectetur adipisicing elit'}</span>
        </CardHeader>
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-8' }}>Popover on top</Btn>
            <Popover
              placement='top'
              isOpen={popover}
              target='Popover-8'
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                {Popoverbody}
              </PopoverBody>
            </Popover>
            {Data.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlContents;