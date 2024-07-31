import React, { Fragment, useEffect, useState } from 'react';
import { FileText, LogIn, Mail, Settings, User } from 'react-feather';
import { Media } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { H6, Image, LI, UL } from '../../AbstractElements';
import UserImg from '../../assets/images/avtar/man.png';
import ItemCart from './ItemCart';
import MaxMiniSize from './MaxMiniSize';
import MoonLight from './MoonLight';
import Notification from './Notification';
import Language from './Langauge';
import { firebase_app } from '../../Config/Config';
import Bookmark from './Bookmark/index';
import { Account, Inbox, LogOut, Taskboard } from '../../Constant';

const HeaderContain = () => {// eslint-disable-next-line
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || UserImg);
    setName(localStorage.getItem('Name'));
  }, []);
  const authenticated = JSON.parse(localStorage.getItem('authenticated'));
  const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
  const history = useNavigate();
  const Logout = () => {
    localStorage.removeItem('profileURL');
    localStorage.removeItem('Name');
    localStorage.removeItem('token');
    firebase_app.auth().signOut();
    history(`${process.env.PUBLIC_URL}/sample-page`);
    localStorage.setItem('authenticated', false);
  };
  return (
    <Fragment>
      <div className="nav-right col-10 col-sm-6 pull-right right-header p-0 dash-76">
        <UL attrUL={{ className: `simple-list flex-row nav-menus` }}>
          <LI attrLI={{ className: 'onhover-dropdown' }}><H6 attrH6={{ className: 'txt-dark mb-0 mt-1' }}>EN</H6>
            <Language />
          </LI>
          <MoonLight />
          <ItemCart />
          <Bookmark />
          <Notification />
          <MaxMiniSize />
          <LI attrLI={{ className: 'profile-nav onhover-dropdown pe-0 pt-0 me-0' }} >
            <Media className="profile-media">
              <Image attrImage={{
                className: 'rounded-circle', src: `${authenticated ? auth0_profile.picture : profile}`, alt: '',
              }}
              />
              <Media body>
                <span>{authenticated ? auth0_profile.name : name}</span>
              </Media>
            </Media>
            <UL attrUL={{ className: `simple-list profile-dropdown onhover-show-div` }}>
              <LI><Link to={`${process.env.PUBLIC_URL}/sample-page`}><i><User /></i><span>{Account} </span></Link></LI>
              <LI><Link to={`${process.env.PUBLIC_URL}/sample-page`}><i><Mail /></i><span>{Inbox}</span></Link></LI>
              <LI><Link to={`${process.env.PUBLIC_URL}/sample-page`}><i><FileText /></i><span>{Taskboard}</span></Link></LI>
              <LI><Link to={`${process.env.PUBLIC_URL}/sample-page`}><i><Settings /></i><span>Settings</span></Link></LI>
              <LI attrLI={{ onClick: Logout }}>
                <Link to={`${process.env.PUBLIC_URL}/sample-page`}>
                  <LogIn /><span>{LogOut}</span>
                </Link>
              </LI>
            </UL>
          </LI>
        </UL>
      </div >
    </Fragment >
  );
};
export default HeaderContain;
