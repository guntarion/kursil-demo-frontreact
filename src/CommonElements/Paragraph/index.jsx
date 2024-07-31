import React, { Fragment } from 'react';

const P = (props) => {
      const { children = '', innerHtml = '' } = props;
      return (
        <Fragment>
          {innerHtml ? <p dangerouslySetInnerHTML={{ __html: innerHtml }} />
                        : ''}
          <p {...props.attrPara} >{children}</p>
        </Fragment>
      );
};

export default P;