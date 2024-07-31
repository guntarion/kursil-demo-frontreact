import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, googleProvider, Jwt_token } from '../../../Config/Config';
import { GoogleSVG } from '../../../Data/svgIcons';

const GoogleCus = () => {
    const history = useNavigate();

    const [value, setValue] = useState(
    );
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);

    const googleAuth = async () => {
        try {
            firebase_app.auth().signInWithPopup(googleProvider).then(function (result) {
                setName(result.user.displayName);
                setValue(result.user.photoURL);
                localStorage.setItem('token', Jwt_token);
                setTimeout(() => {
                    history(`${process.env.PUBLIC_URL}/sample-page`);
                }, 200);

            });
        } catch (error) {
            setTimeout(() => {
                toast.error('Oppss.. The password is invalid or the user does not have a password.');
            }, 200);
        }
    };

    return (
        <Fragment>
            <a href='#javascript' onClick={googleAuth} ><GoogleSVG /></a>
        </Fragment>
    );
};

export default GoogleCus;