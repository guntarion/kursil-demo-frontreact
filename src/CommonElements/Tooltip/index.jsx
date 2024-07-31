import React from 'react';
import { Tooltip } from 'reactstrap';

const ToolTip = (props) => {
      const { children = '' } = props;
      return (
        <Tooltip {...props.attrToolTip} >
          {children}
        </Tooltip>
      );
};

export default ToolTip;