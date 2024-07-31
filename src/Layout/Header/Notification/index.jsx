import React, { Fragment } from 'react';
import { Bell, X } from 'react-feather';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NotificationData } from '../../../Data/LayoutData';
import { HeaderNotificationSvg } from '../../../Data/svgIcons';
import { H3, H5, LI, P, UL } from '../../../AbstractElements';

const Notification = () => {
  return (
    <Fragment>
      <LI attrLI={{ className: 'onhover-dropdown' }}>
        <div className="notification-box"><HeaderNotificationSvg /><span className="badge rounded-pill badge-warning">4</span></div>
        <div className={`onhover-show-div notification-dropdown`}>
          <div className="dropdown-title">
            <H3>Notification</H3><a className="f-right" href="#javascript"><Bell /></a>
          </div>
          <UL attrUL={{ className: 'simple-list custom-scrollbar' }}>
            {
              NotificationData.map((item) => {
                return (
                  <LI key={item.id}>
                    <Media>
                      <div className={`notification-img ${item.class}`}><img src={item.img} alt="" />
                      </div>
                      <Media body>
                        <H5><Link to={`${process.env.PUBLIC_URL}/sample-page`} className='f-14 m-0'>{item.name}</Link></H5>
                        <P>{item.desp}</P><span>{item.time}</span>
                      </Media>
                      <div className="notification-right"><a href="#javascript"><X /></a></div>
                    </Media>
                  </LI>
                );
              })
            }
            <LI attrLI={{ className: 'p-0' }}><a className="btn btn-primary" href="#javasxript">Check all</a></LI>
          </UL>
        </div>
      </LI>
    </Fragment>
  );
};
export default Notification;