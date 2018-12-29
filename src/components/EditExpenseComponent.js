import React from 'react';
import {connect} from 'react-redux';
import  ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className="page-header">
                <div className="content-container">
                    <div className="page-header__action">
                        <h1 className="page-header__title">Edit Expense</h1>
                        <button 
                            className="button button--secondary button--action"
                            onClick={() => {
                            this.props.startRemoveExpense({id: this.props.expense.id});
                            this.props.history.push('/');
                            //props.dispatch(removeExpense({id:props.expense.id}));
                        }}
                        >
                            <span>Remove</span>
                            <span><FontAwesomeIcon icon={['fas', 'trash']} /> </span>
                    
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                </div> 
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
