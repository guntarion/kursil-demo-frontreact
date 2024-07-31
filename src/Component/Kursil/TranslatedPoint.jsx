import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { P } from '../AbstractElements';

const TranslatedPoint = ({ original, translated }) => {
  return (
    <Card className="mb-2">
      <CardBody>
        <P className="mb-1"><strong>Original:</strong> {original}</P>
        <P className="mb-0"><strong>Translated:</strong> {translated}</P>
      </CardBody>
    </Card>
  );
};

export default TranslatedPoint;