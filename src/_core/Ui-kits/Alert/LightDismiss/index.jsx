import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H5, P } from '../../../../AbstractElements';
import { Dismissing } from '../../../../Constant/index';
import { AlertWithLightDismissData } from '../../../../Data/Ui-kits';
import CommonAlert from '../Common/CommonAlert';

const AlertWithLightDismiss = () => {
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
            className: 'alert-dismissible', color: 'primary',
            isOpen: Open,
            target: 'Alert-1',
          }}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}
          >

            <P><strong>Holy ! </strong> You can check in on some of those fields below.</P>
          </Alerts>
          {AlertWithLightDismissData.map((data) =>
            <CommonAlert key={data.id} item={data} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithLightDismiss;