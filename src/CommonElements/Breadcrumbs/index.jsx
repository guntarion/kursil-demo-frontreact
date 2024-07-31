import React, { Fragment } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Home } from 'react-feather';
import H3 from '../Headings/H3Element';

const Breadcrumbs = (props) => {
  const { title = '', parent = '' } = props;
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="12" sm='6'>
              <H3>{title}</H3>
            </Col>
            <Col xs="12" sm='6'>
              <div className="breadcrumb">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to={`${process.env.PUBLIC_URL}/sample-page`}>
                      <Home />
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>{parent}</BreadcrumbItem>
                  <BreadcrumbItem active>{title}</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
