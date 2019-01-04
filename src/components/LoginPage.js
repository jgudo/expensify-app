import React from 'react';
import {connect} from 'react-redux';
import {startLogin, startLoginWithFacebook, startLoginWithGithub, startLoginWithTwitter} from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__hero">
            <div className="hero-title">
                <h1>Expensify</h1>
                <p>Get your expenses under control</p>
            </div>
            <img src="/images/expensify-illustration.svg" />
        </div>
        <div className="box-layout__box">
            <h1 className="box-layout__title">Login to Expensify</h1>
            <button onClick={startLogin} className="button button--stretched button--social button--google">
                <span>Login with Google</span> 
                <span><FontAwesomeIcon icon={['fab', 'google']} /></span>
            </button>
        
            <button onClick={startLoginWithFacebook} className="button button--stretched button--social button--facebook">
                <span>Login with Facebook </span>
                <span><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </span>
            </button>
            <button onClick={startLoginWithGithub} className="button button--stretched button--social button--twitter">
                <span>Login with Twitter </span>
                <span><FontAwesomeIcon icon={['fab', 'twitter']} /> </span>
            </button>
            <button onClick={startLoginWithGithub} className="button button--stretched button--social button--github">
                <span>Login with Github </span>
                <span><FontAwesomeIcon icon={['fab', 'github']} /> </span>
            </button>

            <p className="copyright">&copy; Copyright 2019 Expensify</p>                
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithGithub: () => dispatch(startLoginWithGithub()),
    startLoginWithTwitter: () => dispatch(startLoginWithTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);