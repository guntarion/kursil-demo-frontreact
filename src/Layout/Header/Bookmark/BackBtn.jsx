import React, { Fragment } from 'react';
import { Btn, LI } from '../../../AbstractElements';
import { Back } from '../../../Constant';

const BackBtns = () => {
    const backtobookmark = () => {
        document.querySelector('.flip-card-inner').classList.remove('flipped');
    };
    return (
        <Fragment>
            <LI>
                <Btn attrBtn={{ color: 'white', className: 'd-block flip-back font-primary p-0', onClick: backtobookmark }}>{Back}</Btn>
            </LI>
        </Fragment>
    );
};
export default BackBtns;