import { H5, P } from '../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const SamplePageContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0">
                  <H5>Kurikulum Silabus PLN Pusdiklat</H5><span>Generate dari KnowledgeBase OpenAI</span>
                </CardHeader>
                <CardBody>
                  <P>Kurikulum dan Silabus PLN Pusdiklat</P>
                  Perihal yang dihasilkan:
                  <ul>
                  <li>Kurikulum Silabus yang dapat di-generate secara relatif singkat dengan biaya relatif lebih murah.</li>
                  <li>Kurikulum yang lebih relevan, terupdate, tujuan belajar yang benar-benar cerminan dari materi riil, estimasi waktu yang lebih akurat.</li>
                  <li>Silabus dengan struktur yang jelas, mencakup tujuan pembelajaran, materi, metode pengajaran, dan metode penilaian yang sudah tersusun jelas, “tinggal pakai”. </li>
                  <li>Handout, quiz, arahan diskusi untuk pegangan pelaksana training.</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default SamplePageContain;