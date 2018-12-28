import React from 'react';
import {connect} from 'react-redux';
import { startLogout} from '../actions/auth';
import {NavLink} from 'react-router-dom';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
            <li><button onClick={startLogout}>Logout</button></li>
        </ul>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);