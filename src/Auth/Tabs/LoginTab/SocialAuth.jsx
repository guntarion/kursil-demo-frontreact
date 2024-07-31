import React, { Fragment } from 'react';
import { LI } from '../../../AbstractElements';
import FacebookCus from './Facebook';
import GithubCus from './Github';
import GoogleCus from './Google';

const SocialAuth = () => {
    return (
        <Fragment>
            <LI><FacebookCus /></LI>
            <LI><GoogleCus /></LI>
            <LI><GithubCus /></LI>
        </Fragment >
    );
};

export default SocialAuth;