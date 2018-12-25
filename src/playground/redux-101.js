import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducer
//1. Pure function

const countReducer = (state = { count: 0 }, action) => {
    
    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };   
        case 'RESET': 
            return {
                count: 0
            };
        default : 
            return state;
    }

};

const store = createStore(countReducer); 

const unSubscribe = store.subscribe( () => {
    console.log(store.getState('count'));
});

//store.subscribe(unSubscribe);

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 15}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 50}));

store.dispatch(resetCount());

