import React, { Fragment, } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import Layout from '../Layout/Layout';

const LayoutRoutes = () => {
  return (
    <Fragment>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route element={<Layout />} key={i}>
            <Route path={path} element={Component} />
          </Route>
        ))}
      </Routes>
    </Fragment >
  );
};

export default LayoutRoutes;