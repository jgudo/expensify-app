import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpenseComponent extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        //props.dispatch(addExpense(expense));
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="page-header">
                 <div className="content-container">
                    <h1 className="page-header__title">Add New Expense</h1>
                 </div>
                 <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
            
         
         );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpenseComponent);