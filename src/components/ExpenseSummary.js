import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import getExpenseTotal from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExpenseSummary = ({expenseCount, expenseTotal, textFilter}) => {
    return (
        <div className="page-header">
           <div className="content-container">
                {expenseCount >=1 && (
                    <h2 className="page-header__title">Viewing 
                        <span> { expenseCount }</span> 
                        { expenseCount <= 1 ? ' expense ' : ' expenses '}
                        totalling 
                        <span>   ₱{numeral(expenseTotal / 100).format('₱0,0.00')}</span>
                    </h2>
                )}
                {
                    textFilter && <p className="filter-text">
                        Found {expenseCount} {expenseCount <= 1 ? 'result' : 'results'} with keyword: <span>{textFilter}</span>
                    </p>
                }
                <div className="page-header__actions">
                    <Link to="/create" className="button button--action">
                         <span>Add New Expense</span>
                         <span><FontAwesomeIcon icon={['fas', 'plus']} /> </span>
                    </Link>
                </div>
           </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visible = visibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visible.length,
        expenseTotal: getExpenseTotal(visible),
        textFilter: state.filters.text
    }
};

export default connect(mapStateToProps)(ExpenseSummary);