import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup } from 'reactstrap';
import { H5, P, UL } from '../../../AbstractElements';
import SocialAuth from './SocialAuth';

const SignInWith = () => {
    return (
        <Fragment>
            <div className='login-social-title'><H5>Sign in with</H5> </div>
            <FormGroup>
                <UL attrUL={{ className: 'simple-list login-social flex-row' }}>
                    <SocialAuth />
                </UL>
            </FormGroup>
            <P>Don't have account ?
                <Link className='ms-2' to={'/'}>Create Account</Link>
            </P>
        </Fragment>
    );
};
export default SignInWith;