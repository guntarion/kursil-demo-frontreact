import React, { Fragment, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer/index';
import Loader from './Loader';
import TapTop from './TapTop/index';
import Header from './Header';
import SideBarLayout from './SideBar-Layout';
import Themecustomizer from './ThemeCustomizer';
import CheckContext from '../_helper/customizer';
import ConfigDB from '../Config/Theme-Config';
import AnimationThemeContext from '../_helper/AnimationTheme';

const Layout = ({ children, classNames, ...rest }) => {
  const { sidebar_types, settings, toggleIcon, setToggleIcon, defaultClass, setDefaultClass
  } = useContext(CheckContext);
  const settings1 = localStorage.getItem('sidebar_Settings') || settings;
  const sidebar_types1 = localStorage.getItem('sidebar_types') || sidebar_types;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme = localStorage.getItem('animation') || animation || ConfigDB.data.router_animation;
  window.addEventListener('resize', () => {
    if ((window.innerWidth - 440) <= 575) {
      setToggleIcon(true);
    } else {
      setToggleIcon(false);
    }
    if (window.innerWidth <= 992) {
      setDefaultClass(true);
    } else setDefaultClass(false);
  });
  return (
    <Fragment>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${!defaultClass ? sidebar_types1 : 'compact-wrapper'} ${settings1}`} id="pageWrapper">
        <div className={`page-header ${toggleIcon ? 'close_icon' : ''}`}>
          <Header />
        </div>
        <div className="page-body-wrapper">
          <div className={`sidebar-wrapper ${toggleIcon ? 'close_icon' : ''}`}>
            <div>
              <SideBarLayout />
            </div>
          </div>
          <div className="page-body">
            <TransitionGroup {...rest}>
              <CSSTransition
                key={location.key}
                timeout={100}
                classNames={animationTheme}
                unmountOnExit
              >
                <div>
                  <Outlet />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </div>
      <Themecustomizer />
      <ToastContainer />
    </Fragment>
  );
};
export default Layout;