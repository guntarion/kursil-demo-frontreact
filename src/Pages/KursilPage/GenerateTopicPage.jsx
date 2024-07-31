// src/Components/Pages/KursilPage/GenerateMateri.jsx
import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import GenerateTopic from '../../Component/Kursil/GenerateTopic';

const GenerateTopicPage = () => {
  return (

    <Fragment>
      <Breadcrumbs parent="Kurikulum Silabus" title="Generate Materi" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <GenerateTopic />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GenerateTopicPage;