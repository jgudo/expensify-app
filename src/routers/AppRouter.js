import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardComponent from '../components/ExpenseDasboardComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import PrivacyPolicy from '../components/PrivacyPolicy';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} /> 
                <PrivateRoute path="/dashboard" component={ExpenseDashboardComponent} />   
                <PrivateRoute path="/create" component={AddExpenseComponent} />    
                <PrivateRoute path="/edit/:id" component={EditExpenseComponent} />
                <PrivateRoute path="/privacypolicy" component={PrivacyPolicy} />       
                <PublicRoute component={NotFoundPage} />    
                 
            </Switch>
        </div>
    </Router>
);

export default AppRouter;