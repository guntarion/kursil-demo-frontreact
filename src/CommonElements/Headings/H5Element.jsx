import React from 'react';

const H5 = (props) =>{
    const { children = '' } = props;
    return <h5 {...props.attrH5}>{children}</h5>;
};

export default H5;