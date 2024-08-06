// src/Components/Pages/KursilPage/KursilVsJobdescPage.jsx
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';

const KursilVsJobdescPage = () => {
  return (

    <Fragment>
      <Breadcrumbs parent="Additional Features" title="Kursil vs. Jobdesc" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              KursilVsJobdescPage
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default KursilVsJobdescPage;