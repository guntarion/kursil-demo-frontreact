import Btn from '../Button';
import React from 'react';
import { Alert } from 'reactstrap';

const Alerts = (props) => {
      const { children = "", closeBtn = "", attrBtn = "", divCls = "", btnContent = "", } = props;
      return (
        <Alert {...props.attrAlert} >
          {children}
          {closeBtn ? <Btn attrBtn={attrBtn}><div className={divCls} dangerouslySetInnerHTML={{ __html: btnContent }} /></Btn> : ''}
        </Alert>
      );
};

export default Alerts;