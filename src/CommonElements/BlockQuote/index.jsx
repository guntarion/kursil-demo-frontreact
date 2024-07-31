import React from 'react';

const BlockQuotes = (props) =>{
      const { children = '' } = props;

    return(
      <blockquote {...props.attrBlockQuote}>
        {children}
      </blockquote>
    );
}; 

export default BlockQuotes;