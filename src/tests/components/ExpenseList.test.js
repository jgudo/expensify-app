import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';


test('Should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render message if not expense passed', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});