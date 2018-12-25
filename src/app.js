import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';




const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 1500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 500, createdAt: 20}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 200, createdAt: 100}));


const state = store.getState();
const visibleExpenses  = getVisibleExpenses(state.expenses, state.filters);

console.log('VISIBLE: ',visibleExpenses);

console.log(store.getState());

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


