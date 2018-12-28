import uuid from 'uuid';
import database from '../firebase/firebase';

//component calls action generator 
// action generator return object
//component dispatches object
//redux store changes

//component calls action generator 
// action generator return function
//component dispatches function (?)
//function runs (has the ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE
export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

//BEFORE -- without firebase
// export const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
//     type: 'ADD_EXPENSE',
//     expenses: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expenses = {
            description,
            note,
            amount,
            createdAt
        };
    return database.ref(`users/${uid}/expenses`).push(expenses).then( (ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenses
            }));
        });

    }
};


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

//REMOVE_EXPENSE

export const removeExpense = ( {id} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });   
    };
};

//SET EXPENSES
export const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
});

export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            //console.log(expensesArr);
            dispatch(setExpense(expenses));
        });
    }
}
