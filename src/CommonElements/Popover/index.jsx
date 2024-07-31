import React from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const Popovers = (props) => {
      const { title = '', children = '', placement = '', isOpen = '', target = '', toggle = '', trigger = '' } = props;
      return (
        <Popover
                  placement={placement}
                  isOpen={isOpen}
                  target={target}
                  toggle={toggle}
                  trigger={trigger}
            >
          {title ? <PopoverHeader>{title}</PopoverHeader> : ''}
          <PopoverBody>
            {children}
          </PopoverBody>
        </Popover>
      );
};


export default Popovers;