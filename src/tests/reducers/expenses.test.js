import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default values', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove item by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);

});

test('Should not remove item if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);

});

test('Should add item to array', () => {
    const item = {
        id: '4',
        description: 'Gagu',
        note: '',
        amount: 145,
        createdAt: 0

    };
    const action = {
        type: 'ADD_EXPENSE',
        expenses: { ...item }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        item
    ]);
});

test('Should edit expense', () => {
    const updates = {
        description: 'Gommu gomuu no'  
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    };

    const state = expenseReducer(expenses, action);
    expect(state[0]).toEqual({
        ...state[0],
        ...updates
    });
});


test('Should not edit expense if not found', () => {
    const updates = {
        description: 'Gommu gomuu no'  
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
