import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, startSetExpense, addExpense, editExpense, removeExpense, setExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('Should add Expense to object', () => {
    const action = removeExpense({id: 'asddfg'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asddfg'
    });
});

test('Should add values with provided data', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: expenses[2]
    });
});

test('should add expense to database store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Gagu',
        amount: 342,
        note: 'Haha',
        createdAt: 23451124
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expenses.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense defaults to database store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseDefaults)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expenses.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('Should set up expense action object with data', () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    });
});

test('Should fetch data from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSE',
            expenses
        });
        done(); 
        jest.setTimeout(30000);
    });
});

// test('Should add default values', () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expenses: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });