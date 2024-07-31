import React, { Fragment } from 'react';
import { H4, H6} from '../../../AbstractElements';

const FormHeader = (props) => {
    const { selected = '' } = props;
    return (
        <Fragment>
            <div>
                <H4>{selected === 'firebase' ? 'Sign In With Firebase' : 'Sign In With Jwt'}</H4>
                <H6>{'Welcome back! Log in to your account.'}</H6>
            </div>
        </Fragment>
    );
};
export default FormHeader;