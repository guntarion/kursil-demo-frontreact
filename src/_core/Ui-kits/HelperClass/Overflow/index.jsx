import React from 'react';
import CommonHeaderClass from '../Common/CommonHeaderClass2';
import { Overflow } from '../../../../Constant/index';

const OverflowCard = () => {
  return (
    <CommonHeaderClass title={Overflow}>{`.o-hidden {
        overflow: hidden;
        }
        .o-visible {
        overflow: visible;
        }
        .o-auto {
        overflow: auto;
        }
      `}
    </CommonHeaderClass>
  );
};

export default OverflowCard;