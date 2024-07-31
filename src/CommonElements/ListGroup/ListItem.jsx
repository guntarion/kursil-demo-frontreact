import React from 'react';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const LI = (props) => {
      const { children = '', val = '' } = props;
      return (
        <Fragment>
          <ListGroupItem {...props.attrLI}>{val ? <div dangerouslySetInnerHTML={{ __html: val }} /> : ''} {children}</ListGroupItem>
        </Fragment>
      );
};

export default LI;