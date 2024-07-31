import React from 'react';

const H1 = (props) =>{
    const { children = '' } = props;
    return <h1 {...props.attrH1}>{children}</h1>;
};

export default H1;