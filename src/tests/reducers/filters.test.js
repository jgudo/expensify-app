import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('Should set sort by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy date', () => {
    const currentstate = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentstate, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');

});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Something' });
    expect(state.text).toBe('Something');
});

test('Shoud set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).valueOf() });
    expect(state.startDate).toBe(moment(0).valueOf());
});

test('Should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).valueOf() });
    expect(state.endDate).toBe(moment(0).valueOf());
});