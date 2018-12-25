import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//
//Action Generators
//

//ADD_EXPENSE
const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//REMOVE_EXPENSE

const removeExpense = ( {id} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Reducer 
const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expenses];
        
        case 'REMOVE_EXPENSE': 
            return state.filter( (exp) => exp.id !== action.id );
        
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default: 
            return state;
    }
}

const filtersReducer  = (state = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined}, action) => {
    
    switch(action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
}

//Redux createStore method
//takes a single function
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//Watch for action changes
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//Run the action
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 19 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Vacation', amount: 5000, createdAt: 20 }));

// store.dispatch(removeExpense({id: expenseOne.expenses.id}));
// store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(250));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(350));
// store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'January Rent',
        note: 'This was the final  payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};