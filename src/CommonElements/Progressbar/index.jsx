import React from 'react';
import { Progress } from 'reactstrap';

const Progressbar = (props) => {
      const { children = '' } = props;
      return (
        <Progress {...props.attrProgress} >{children}</Progress>
      );
};

export default Progressbar;