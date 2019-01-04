import React from 'react';
import {connect} from 'react-redux';
import { startLogout} from '../actions/auth';
import {Link} from 'react-router-dom';

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="logo">
                    <img src="/images/favicon.png" />
                    <Link to="/dashboard" className="header__title">
                        <h1>Expensify</h1>
                    </Link>
                </div>
                <button 
                    onClick={startLogout} 
                    className="button button--transparent-l">
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);