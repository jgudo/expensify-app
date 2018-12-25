import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardComponent from '../../components/ExpenseDasboardComponent';

test('Should render dashboard page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardComponent />);
    expect(wrapper).toMatchSnapshot();
});