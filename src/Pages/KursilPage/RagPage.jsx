// src/Components/Pages/KursilPage/RagPage.jsx
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import RagComponent from '../../Component/Kursil/RagComponent';

const RagPage = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Additional Features" title="RAG" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <RagComponent />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RagPage;