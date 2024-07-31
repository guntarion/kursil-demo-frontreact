import React from 'react';
import { Badge } from 'reactstrap';

const Badges = (props) => {
      const { children = '' } = props;
      return (
        <Badge {...props.attrBadge}>{children}</Badge>
      );
};

export default Badges;