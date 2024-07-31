import ListItems from './ListItem';
import React from 'react';
import { ListGroup } from 'reactstrap';

const UL = (props) => {
      const { children = '', attrLI = '' } = props;
      return (
        <ListGroup {...props.attrUL}>
          {props.listItem ? props.listItem.map((item, i) => <ListItems val={item} attrLI={attrLI} key={i} />) : children}
        </ListGroup>
      );
};

export default UL;