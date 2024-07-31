// src/Components/Kursil/ElaboratedPoint.jsx
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { H5, H6, P } from '../../AbstractElements';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  
  li {
    margin-bottom: 5px;
  }
`;

const ElaboratedPoint = ({ subtopic, elaboration }) => {
  const renderElaboration = (text) => {
    const lines = text.split('\n');
    let currentList = [];
    const result = [];

    lines.forEach((line, index) => {
      if (line.startsWith('- **')) {
        if (currentList.length > 0) {
          result.push(<StyledUl key={`list-${index}`}>{currentList}</StyledUl>);
          currentList = [];
        }
        result.push(<H6 key={`header-${index}`}>{line.replace('- **', '').replace(':**', ':')}</H6>);
      } else if (line.startsWith('-')) {
        currentList.push(<li key={`item-${index}`}>{line.substring(1).trim()}</li>);
      } else {
        result.push(<P key={`text-${index}`}>{line}</P>);
      }
    });

    if (currentList.length > 0) {
      result.push(<StyledUl key="final-list">{currentList}</StyledUl>);
    }

    return result;
  };

  return (
    <Card className="mb-3">
      <CardBody>
        <H5>Topic: {subtopic}</H5>
        {renderElaboration(elaboration)}
      </CardBody>
    </Card>
  );
};

export default ElaboratedPoint;