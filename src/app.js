import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import expensesTotal from './selectors/expenses-total';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';


const store = configureStore();

const state = store.getState();
console.log('TOTAL EXPENSE: ', expensesTotal(state.expenses));

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


