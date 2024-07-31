import React, { useState } from 'react';
import { P } from '../../../../AbstractElements';
import Alerts from '../../../../CommonElements/Alert';

const CommonAlert = ({ item }) => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Alerts attrAlert={{
      className: 'alert-dismissible', color: item.alertcolor,
      isOpen: Open,
      target: 'Alert-' + item.id,
    }}
      closeBtn={true}
      attrBtn={{ className: 'btn-close', color: item.btnclose, id: 'Alert-' + item.id, onClick: Toggle }}
      btnContent={item.btnContent}
      divCls={item.divCls}
    >
      {item.icon}
      <P innerHtml={item.alerttxt} />
    </Alerts>
  );
};

export default CommonAlert;