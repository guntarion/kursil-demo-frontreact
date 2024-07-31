import React, { Fragment, useContext } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import CustomizerContext from '../../../../_helper/customizer/index';
import CommenUL from './CommenUL';

const SidebarType = () => {
  const { addSidebarTypes } = useContext(CustomizerContext);
  const handleSidebarType = (e, type) => {
    e.preventDefault();
    addSidebarTypes(type);
  };

  return (
    <Fragment>
      <H6>Sidebar Type</H6>
      <UL attrUL={{ className: 'simple-list flex-row sidebar-type layout-grid' }}>
        <LI
          attrLI={{
            dataattr: 'normal-sidebar',
            onClick: (e) => handleSidebarType(e, 'horizontal-wrapper')
          }}>
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <UL attrUL={{ className: 'flex-row' }}>
              <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}></LI>
            </UL>
          </div>
        </LI>
        <LI
          attrLI={{
            dataattr: 'compact-sidebar',
            onClick: (e) => handleSidebarType(e, 'compact-wrapper')
          }}>
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <UL attrUL={{ className: 'flex-row' }}>
              <LI attrLI={{ className: 'bg-dark sidebar compact' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}></LI>
            </UL>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};

export default SidebarType;
