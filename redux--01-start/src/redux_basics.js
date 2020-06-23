const redux = require("redux");
const createStore = redux.createStore;
/* 
Creates a Redux store that holds the state tree. The only way to change the data in the store is to call dispatch() on it.

There should only be a single store in your app. To specify how different parts of the state tree respond to actions, you may combine several reducers into a single reducer function by using combineReducers.

@template S — State object type.

@param reducer
A function that returns the next state tree, given the current state tree and the action to handle.

@param preloadedState
The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you use combineReducers to produce the root reducer function, this must be an object with the same shape as combineReducers keys.

@param enhancer
The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

@returns
A Redux store that lets you read the state, dispatch actions and subscribe to changes.
*/

const initialState = {
  counter: 0,
};

//Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };
      break;
    default:
      return state;
      break;
  }
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
// compulsory to have type property
console.log(store.getState());


//Subscription
