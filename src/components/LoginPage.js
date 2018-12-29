import React from 'react';
import {connect} from 'react-redux';
import {startLogin, startLoginWithFacebook} from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Get your expenses under control</p>
            <button onClick={startLogin} className="button button--stretched button--social">
                <span>Login with Google</span> 
                <span><FontAwesomeIcon icon={['fab', 'google']} /></span>
            </button>
        
            <button onClick={startLoginWithFacebook} className="button button--stretched button--social">
                <span>Login with Facebook </span>
                <span><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </span>
            </button>         
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);