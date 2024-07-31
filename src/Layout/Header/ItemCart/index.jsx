import React, { Fragment } from 'react';
import { Edit, ShoppingBag, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { Input, Media } from 'reactstrap';
import { LI, Image, UL, P, H5, H3, H4 } from '../../../AbstractElements';
import { CheckOut } from '../../../Constant';
import { ItemCartData } from '../../../Data/LayoutData';
import { CartBoxSvg } from '../../../Data/svgIcons';

const ItemCart = () => {
  return (
    <Fragment>
      <LI attrLI={{ className: 'cart-nav onhover-dropdown' }}>
        <div className="cart-box"><i><CartBoxSvg /></i><span className="badge rounded-pill badge-primary">4</span></div>
        <div className={`cart-dropdown onhover-show-div`}>
          <div className="dropdown-title">
            <H3>Cart</H3><a className="f-right" href="#javascript"><ShoppingBag /></a>
          </div>
          <UL attrUL={{ className: `simple-list border-top custom-scrollbar` }}>
            {
              ItemCartData.map((item) => {
                return (
                  <LI key={item.id}>
                    <Media>
                      <Image attrImage={{ src: `${item.img}`, alt: '', className: 'img-fluid b-r-5 me-3 img-50' }} />&nbsp;
                      <Media body>
                        <H5><Link to={`${process.env.PUBLIC_URL}/sample-page`}>{item.title}</Link></H5>
                        <P attrPara={{ className: 'f-w-700' }}>{item.prize}</P>
                        <div className="cart-quantity">
                          <span className="plus"><i className="fa fa-plus"></i></span>
                          <Input className="count" type="text" name="qty" defaultValue="3" />
                          <span className="minus"><i className="fa fa-minus"></i></span>
                        </div>
                      </Media>
                      <div className="close-circle">
                        <a href="#javascript"><Edit className="me-1" /></a>
                        <a href="#javascript"><Trash2 /></a>
                      </div>
                    </Media>
                  </LI>
                );
              })
            }
            <LI attrLI={{ className: 'order-total' }}>
              <H4 attrH4={{ className: 'mb-0 f-w-700' }}>Total : <span>$1720.00</span></H4><Link className="btn btn-primary view-checkout"
                to={`${process.env.PUBLIC_URL}/sample-page`}>{CheckOut}</Link>
            </LI>
          </UL>
        </div>
      </LI>
    </Fragment >
  );
};
export default ItemCart;