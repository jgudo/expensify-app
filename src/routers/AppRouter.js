import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardComponent from '../components/ExpenseDasboardComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import HelpPageComponent from '../components/HelpPageComponent';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardComponent} exact={true} />    
                <Route path="/create" component={AddExpenseComponent} />    
                <Route path="/edit/:id" component={EditExpenseComponent} />    
                <Route path="/help" component={HelpPageComponent} />    
                <Route component={NotFoundPage} />    
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;