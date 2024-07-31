import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H5, P } from '../../../../AbstractElements';
import CommonAlert from '../Common/CommonAlert';
import { Dismissing } from '../../../../Constant/index';
import { data } from '../../../../Data/Ui-kits/index';

const AlertWithDarkDismiss = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CardHeader className="pb-0">
          <H5>{Dismissing}</H5><span>{'To animate alerts when dismissing them, be sure to add the .fade and .show classes.'}</span>
        </CardHeader>
        <CardBody>
          <Alerts attrAlert={{
            className: 'alert-dismissible', color: 'primary dark',
            isOpen: Open,
            target: 'Alert-1',
          }}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}
          >
            <P><strong>Holy ! </strong>You can check in on some of those fields below.</P>
          </Alerts>
          {data.map((data, i) =>
            <CommonAlert key={i} item={data} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithDarkDismiss;