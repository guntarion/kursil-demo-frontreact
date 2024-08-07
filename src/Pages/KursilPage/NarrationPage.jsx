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
              <strong>Fitur Powerspeak:</strong>
              <ul>
                <li>Membuat narasi bicara presentasi dalam durasi sesuai arahan</li>
                <li>Merekomendasikan gestur bicara sesuai hasil narasi</li>
                <li>Sampling audio narasi dari narasi bicara</li>
                <li>Membuat pertanyaan dan bahan diskusi</li>
                <li>Membuat studi kasus dari topik yang diberikan</li>
                <li>Membuat call to action dari topik yang diberikan</li>
              </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NarrationPage;