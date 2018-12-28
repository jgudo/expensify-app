import React from 'react';
import {connect} from 'react-redux';
import  ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpenseComponent extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        
    }
    // onRemove = () => {
    //     this.props.removeExpense({id: this.props.expense.id});
    //     this.props.history.push('/');
    //    
    // }

    render() {
        return(
            <div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button 
                onClick={() => {
                this.props.startRemoveExpense({id: this.props.expense.id});
                this.props.history.push('/');
                //props.dispatch(removeExpense({id:props.expense.id}));
            }}
            >
             Remove
        
             </button>
        </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id,expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseComponent);
