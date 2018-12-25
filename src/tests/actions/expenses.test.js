import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should add Expense to object', () => {
    const action = removeExpense({id: 'asddfg'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asddfg'
    });
});

test('Should add values with provided data', () => {
    const obj = {description: 'Haha', note: 'Haha', amount: 'Haha', createdAt: 100};
    const action = addExpense(obj);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...obj,
            id: expect.any(String)
            
        }
    })
});

test('Should add default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});