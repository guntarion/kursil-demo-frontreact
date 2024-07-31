import React from 'react';

const H4 = (props) =>{
    const { children = '' } = props;
    return <h4 {...props.attrH4}>{children}</h4>;
};

export default H4;