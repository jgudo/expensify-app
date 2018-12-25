import React from 'react';
import {connect} from 'react-redux';
import getExpenseTotal from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    return (
        <div>
            {expenseCount >=1 && (
                <h3>Viewing 
                    { expenseCount } 
                    { expenseCount <= 1 ? ' expense ' : ' expenses '}
                    totalling {numeral(expenseTotal / 100).format('$0,0.00')}
                </h3>
            )}
         </div>
    );
};

const mapStateToProps = (state) => {
    const visible = visibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visible.length,
        expenseTotal: getExpenseTotal(visible)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);