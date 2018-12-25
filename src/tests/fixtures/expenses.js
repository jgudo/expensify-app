import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 21424,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 135237,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Water Bill',
    note: '',
    amount: 1241,
    createdAt: moment(0).add(4, 'days').valueOf()
}];