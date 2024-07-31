import React, { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { ForgotPassword, RememberPassword } from '../../../Constant';

const FormPassword = () => {
    return (
        <Fragment>
            <FormGroup className="login-btn">
                <div className="checkbox">
                    <Input id="checkbox1" type="checkbox" />
                    <Label for="checkbox1">{RememberPassword}</Label>
                </div>
                <a className="link" href="#javascript">{ForgotPassword}</a>
            </FormGroup>
        </Fragment>
    );
};
export default FormPassword;