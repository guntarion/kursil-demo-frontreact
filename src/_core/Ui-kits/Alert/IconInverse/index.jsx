import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import CommonAlert from '../Common/CommonAlert';
import { Alerts, H5, P } from '../../../../AbstractElements';
import { AlertWithIconInverse } from '../../../../Constant/index';
import { IconInverseData } from '../../../../Data/Ui-kits';

const IconInverse = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal">
        <CardHeader className="pb-0">
          <H5>{AlertWithIconInverse}</H5><span>{'Just add Any icon before text'}</span>
        </CardHeader>

        <CardBody>
          <Alerts attrAlert={{
            className: 'alert-dismissible', color: 'primary inverse',
            isOpen: Open,
            target: 'Alert-1',
          }}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}>
            <i className="icon-timer"></i>
            <P>Your time Over after <b>5</b> miniute</P>
          </Alerts>
          {IconInverseData.map((data) =>
            <CommonAlert key={data.id} item={data} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;