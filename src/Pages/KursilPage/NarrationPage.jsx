// src/Components/Pages/KursilPage/NarrationPage.jsx
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';

const NarrationPage = () => {
  return (

    <Fragment>
      <Breadcrumbs parent="Additional Features" title="Narasi" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              NarrationPage
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NarrationPage;