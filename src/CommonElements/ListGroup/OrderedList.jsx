import React from 'react';

const OL = (props) => {
      const { children = '' } = props;
      return (
        <ol {...props.attrOL}>
          {children}
        </ol>
      );
};

export default OL;