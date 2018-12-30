import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import  ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class EditExpenseComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal = () => {
        this.setState( () => ({
            modalIsOpen: true
        }));
    };
    

    closeModal = () => {
        this.setState( () => ({
            modalIsOpen: false
        }));
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        
    }
     onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
        this.closeModal();
    }

    render() {
        return(
            <div className="page-header">
                <div className="content-container">
                    <div className="page-header__action">
                        <h1 className="page-header__title">Edit Expense</h1>
                        <button 
                            className="button button--secondary button--action"
                            onClick={this.openModal}
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
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS={200}
                    className="modal"
                    contentLabel="Remove Expense Modal"
                >
                    <div>
                        <h2 className="modal__title">Remove this expense?</h2>
                        <button onClick={this.onRemove} className="modal__button">Yes</button>
                        <button onClick={this.closeModal} className="modal__button">No</button>
                    </div>
                    
                </Modal>
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
