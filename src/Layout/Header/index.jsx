import React, { Fragment, useState, useLayoutEffect, useContext } from 'react';
import { Row } from 'reactstrap';
import { Image } from '../../AbstractElements';
// import HeaderContain from './HeaderContain';
import SearchBar from './SearchBar';
import imgg from '../../assets/images/logo/logo.png';
import CheckContext from '../../_helper/customizer/index';
import { ToggleIconss } from '../../Data/svgIcons';

const Header = () => {
  const { toggleSidebar } = useContext(CheckContext);
  const [toggle, setToggle] = useState(false);
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }// eslint-disable-next-line
  const width = useWindowSize();
  const openCloseSidebar = () => {
    setToggle(!toggle);
    toggleSidebar(toggle);
  };
  return (
    <Fragment>
      <Row className="header-wrapper m-0">
        <div className="header-logo-wrapper col-auto p-0" id="out_side_click">
          <div className="logo-wrapper" >
            <a href="#javascript"><Image attrImage={{ className: 'img-fluid', src: `${imgg}`, alt: '' }} /></a></div>
          <div className="toggle-sidebar" onClick={() => openCloseSidebar()} id="sidebar-toggle">
            <i className="status_toggle sidebar-toggle d-flex" >
              <ToggleIconss />
            </i>
          </div>
        </div>
        <SearchBar />
        {/* <HeaderContain /> */}
      </Row>
    </Fragment>
  );
};
export default Header;