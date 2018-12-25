import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render Expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});