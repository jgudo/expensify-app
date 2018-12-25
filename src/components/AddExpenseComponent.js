import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpenseComponent extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        //props.dispatch(addExpense(expense));
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                 <h1>Add New Expense Form</h1>
                 <ExpenseForm 
                     onSubmit={this.onSubmit}
                 />
            </div>
         
         );
    }
}


const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpenseComponent);