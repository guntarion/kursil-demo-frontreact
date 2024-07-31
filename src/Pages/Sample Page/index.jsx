import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SamplePageContain from '../../Component/Sample Page';

const SamplePage = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Pages" title="Sample Page" />
      <SamplePageContain />
    </Fragment>
  );
};
export default SamplePage;