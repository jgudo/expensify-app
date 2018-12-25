import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment'; 

let setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        filters={filters}
    />);
});

test('Should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

//should handle text changes
//should sort by date
//should sort by amount
//should handle date changes
//should handle date focus changes

test('Should handle text changes', () => {
    const value = 'Some changes';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    //setTextFilter(value);
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('Should handle date changes', () => {
    const startDate = moment(0).add(2, 'years');
    const endDate = moment(0).add(4, 'years');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});