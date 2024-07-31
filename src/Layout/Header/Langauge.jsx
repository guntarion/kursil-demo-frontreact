import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Deutsch, English, French, Portuguese, Spanish } from '../../Constant';
import { LI, UL } from '../../AbstractElements';

const Language = () => {
  const [selected, setSelected] = useState('en');
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };
  return (
    <Fragment>
      <div className={`language-dropdown onhover-show-div`}>
        <UL attrUL={{ className: `simple-list p-3` }}>
          <LI attrLI={{ onClick: () => changeLanguage('en') }}>
            <a href="#javascript" data-lng="en">
              <i className="flag-icon flag-icon-is"></i> {English}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('es') }}>
            <a href="#javascript" data-lng="es">
              <i className="flag-icon flag-icon-um"></i> {Spanish}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('pt') }}>
            <a href="#javascript" data-lng="pt">
              <i className="flag-icon flag-icon-uy"></i> {Portuguese}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('fr') }}>
            <a href="#javascript" data-lng="fr">
              <i className="flag-icon flag-icon-nz"></i> {French}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('ae') }}>
            <a href="#javascript" data-lng="ae">
              <i className="flag-icon flag-icon-ae"></i> {'لعربية'}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('du') }}>
            <a href="#javascript" data-lng="du">
              <i className="flag-icon flag-icon-de"></i> {Deutsch}
            </a>
          </LI>
          <LI attrLI={{ onClick: () => changeLanguage('cn') }}>
            <a href="#javascript" data-lng="cn">
              <i className="flag-icon flag-icon-cn"></i> {'简体中文'}
            </a>
          </LI>
        </UL>
      </div>
    </Fragment>
  );
};
export default Language;