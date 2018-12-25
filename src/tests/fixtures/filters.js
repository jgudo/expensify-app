import moment from 'moment';

const filters = {
    text: '',
    sortBimpory: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'Bill',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export {filters, altFilters};