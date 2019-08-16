// Importing with node
const redux = require('redux');
// Create store is a function
const createStore = redux.createStore;

// Initialise State
const initialState = {
    counter: 0
}

// Reducer takes two args, current state which if returned undefined will use a default value from initialState + an action. Then returns an updated state.
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store, createStore takes arg rootReducer which is returned state
const store = createStore(rootReducer);
console.log(store.getState()); // logs state from store using Node in terminal

// subscription, subscribe takes an argument, a function that executes whenever the state is updated. The function we pass doesn't take any arguments.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// dispatching Action is a function, it takes an argument that is an action which is a javascript object that needs to have a type property, the typical convention tends to be an all UPPERCASE string. After these are define, we can add whatever else we want.
// Increment Counter
store.dispatch({type: 'INC_COUNTER'});
// Add Counter - Increase by value - 10
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());