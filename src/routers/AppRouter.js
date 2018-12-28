import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardComponent from '../components/ExpenseDasboardComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import HelpPageComponent from '../components/HelpPageComponent';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} /> 
                <PrivateRoute path="/dashboard" component={ExpenseDashboardComponent} />   
                <PrivateRoute path="/create" component={AddExpenseComponent} />    
                <PrivateRoute path="/edit/:id" component={EditExpenseComponent} />    
                <Route path="/help" component={HelpPageComponent} />    
                <Route component={NotFoundPage} />    
            </Switch>
        </div>
    </Router>
);

export default AppRouter;