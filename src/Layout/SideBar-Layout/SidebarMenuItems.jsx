import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LI, UL } from '../../AbstractElements';
import { MENUITEMS } from './Menu';
import { Label } from 'reactstrap';
import { Back } from '../../Constant';

const SidebarMenuItems = ({ setMainMenu, sidebartoogle, setNavActive }) => {
  // eslint-disable-next-line
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const toggletNavActive = (item) => {
    if (window.innerWidth <= 991) {
      document.querySelector('.page-header').className =
        'page-header close_icon';
      document.querySelector('.sidebar-wrapper').className =
        'sidebar-wrapper close_icon ';
      if (item.type === 'sub') {
        document.querySelector('.page-header').className = 'page-header ';
        document.querySelector('.sidebar-wrapper').className =
          'sidebar-wrapper ';
      }
    }
    if (!item.active) {
      MENUITEMS.map((a) => {
        a.Items.filter((Items) => {
          if (a.Items.includes(item)) Items.active = false;
          if (!Items.children) return false;
          Items.children.forEach((b) => {
            if (Items.children.includes(item)) {
              b.active = false;
            }
            if (!b.children) return false;
            b.children.forEach((c) => {
              if (b.children.includes(item)) {
                c.active = false;
              }
            });
          });
          return Items;
        });
        return a;
      });
    }
    if (item.children) {
      item.active = !item.active;
    }
    setMainMenu({ mainmenu: MENUITEMS });
  };
  return (
    <Fragment>
      <UL attrUL={{ className: 'custom-scrollbar simple-list sidebar-links mt-1', id: 'simple-bar' }}>
        <div className='simplebar-wrapper' style={{ margin: '0px' }}>
          <div className='simplebar-height-auto-observer-wrapper'>
            <div className='simplebar-height-auto-observer'></div>
          </div>
          <div className='simplebar-mask'>
            <div className='simplebar-offset' style={{ right: '0px', bottom: '0px' }}>
              <div className='simplebar-content-wrapper' style={{ height: '100%' }}>
                <div className='simplebar-content'>
                  <LI attrLI={{ className: 'back-btn' }}>
                    <div className="mobile-back text-end"><span>{Back}</span><i className="fa fa-angle-right ps-2"></i></div>
                  </LI>
                  {MENUITEMS.map((Item, i) => (
                    < Fragment key={i} >
                      {Item.Items.map((menuItem, i) => (
                        <LI attrLI={{ className: 'sidebar-list' }} key={i}>
                          {menuItem.type === 'sub' &&
                            <Fragment>
                              {menuItem.badge && <Label className="badge badge-light-primary">2  </Label>}
                              {menuItem.badge1 && <Label className="badge badge-light-info">New  </Label>}
                              <a href="javascript"
                                className={`sidebar-link sidebar-title ${menuItem.active || active ? ' active' : ''}`}
                                onClick={(event) => {
                                  event.preventDefault(); setNavActive(menuItem);
                                }} >
                                {menuItem.icon !== undefined && <menuItem.icon />}
                                <span>{t(menuItem.title)}</span>
                                <div className="according-menu">
                                  {menuItem.active ? (
                                    <i className="fa fa-angle-down"></i>
                                  ) : (
                                    <i className="fa fa-angle-right"></i>
                                  )}
                                </div>
                              </a>
                            </Fragment>
                          }
                          {menuItem.type === 'link' && (
                            <>
                              {menuItem.badge2 && <Label className="badge badge-light-danger">Latest</Label>}
                              <Link
                                to={menuItem.path}
                                className={`sidebar-link sidebar-title ${menuItem.active ? 'active' : ''
                                  }`}
                                onClick={() => toggletNavActive(menuItem)}
                              >
                                {menuItem.icon !== undefined && <menuItem.icon />}
                                <span>{t(menuItem.title)}</span>
                              </Link>
                            </>
                          )}
                          {menuItem.children && (
                            <UL attrUL={{
                              className: 'simple-list sidebar-submenu',
                              style:
                                menuItem.active
                                  ? sidebartoogle
                                    ? {
                                      opacity: 1,
                                      transition: 'opacity 500ms ease-in',
                                    }
                                    : { display: 'block' }
                                  : { display: 'none' }
                            }}>
                              {menuItem.children.map((childrenItem, index) => {
                                return (
                                  <LI key={index}>
                                    {childrenItem.type === 'sub' && (
                                      <a href="javascript" className={`${childrenItem.active ? 'active' : ''}`}
                                        onClick={(event) => {
                                          event.preventDefault();
                                          toggletNavActive(childrenItem);
                                        }}>
                                        {t(childrenItem.title)}
                                        <div className="according-menu">
                                          {childrenItem.active ? (<i className="fa fa-angle-down"></i>) : (<i className="fa fa-angle-right"></i>)} </div>
                                      </a>
                                    )}
                                    {childrenItem.type === 'link' && (
                                      <Link
                                        to={childrenItem.path} className={`${childrenItem.active ? 'active' : ''}`}
                                        onClick={() => toggletNavActive(childrenItem)} >
                                        {t(childrenItem.title)}
                                      </Link>
                                    )}
                                    {childrenItem.type === 'exteral_link' && (
                                      <>
                                        <a target="_blank" className={`${childrenItem.active ? 'active' : ''}`} href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)} >
                                          {t(childrenItem.title)}
                                        </a>
                                      </>
                                    )}
                                    {childrenItem.children && (
                                      <UL attrUL={{
                                        className: 'simple-list nav-sub-childmenu submenu-content',
                                        style: childrenItem.active
                                          ? { display: 'block' }
                                          : { display: 'none' }
                                      }}>
                                        {childrenItem.children.map(
                                          (childrenSubItem, key) => (
                                            <LI key={key}>
                                              {childrenSubItem.type === 'link' && (
                                                <Link
                                                  to={childrenSubItem.path}
                                                  className={`${childrenSubItem.active ? 'active' : ''}`}
                                                  onClick={() => toggletNavActive(
                                                    childrenSubItem)}>
                                                  {t(childrenSubItem.title)}
                                                </Link>
                                              )}
                                            </LI>
                                          )
                                        )}
                                      </UL>
                                    )}
                                  </LI>
                                );
                              })}
                            </UL>
                          )}
                        </LI>
                      ))}
                    </Fragment>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='simplebar-track simplebar-horizontal' style={{ visibility: 'hidden' }}>
          <div className='simplebar-scrollbar' style={{ width: '0px', display: 'none' }}></div>
        </div>
        <div className='simplebar-track simplebar-vertical' style={{ visibility: 'visible' }}>
          <div className='simplebar-scrollbar'></div>
        </div>
      </UL>
    </Fragment>
  );
};
export default SidebarMenuItems;
