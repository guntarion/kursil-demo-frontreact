import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { AUTH0, FIREBASE, JWT } from '../Constant';
import { Image } from '../AbstractElements';
import firebaseImg from '../assets/images/firebase.svg';
import jwtImg from '../assets/images/jwt.svg';
import authImg from '../assets/images/auth0.svg';


const NavAuth = ({ callbackNav, selected }) => {
    return (
        <Nav className="border-tab flex-column" tabs>
            <NavItem>
                <NavLink className={selected === 'firebase' ? 'active' : ''} onClick={() => callbackNav('firebase')}>
                    <Image attrImage={{ src: `${firebaseImg}`, alt: '' }} />
                    <span>{FIREBASE}</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={selected === 'jwt' ? 'active' : ''} onClick={() => callbackNav('jwt')}>
                    <Image attrImage={{ src: `${jwtImg}`, alt: '' }} />
                    <span>{JWT}</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={selected === 'auth0' ? 'active' : ''} onClick={() => callbackNav('auth0')}>
                    <Image attrImage={{ src: `${authImg}`, alt: '' }} />
                    <span>{AUTH0}</span>
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default NavAuth;