import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    const { children = '' } = props;
    return <Button {...props.attrBtn}>{children}</Button>;
};

export default Btn;