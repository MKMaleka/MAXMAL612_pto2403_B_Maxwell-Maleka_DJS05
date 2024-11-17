// Redux store
function createStore(reducer) {
    let state; // Variable to hold the current state
    const listeners = []; // list of subscriber functions
  
    // Method to get the current state
  const getState = () => state;

  // Method to dispatch an action and notify subscribers
  const dispatch = (action) => {
    // Update state using the reducer
    state = reducer(state, action);

    // Notify all subscribers about the state change
    listeners.forEach((listener) => listener());
  };

  // Method to subscribe to state changes
  const subscribe = (listener) => {
    listeners.push(listener);

    // Return an unsubscribe function
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  };

  // Initialize the state by dispatching an empty action
  dispatch({ type: "__INIT__" });

  return { getState, dispatch, subscribe };
}

// Reducer function for the tally counter
function tallyReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

// Create the store using the reducer
const store = createStore(tallyReducer);

// Subscriber function to log state changes
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Test cases using the provided scenarios
console.log("SCENARIO 1: Initial State Verification");
console.log("Initial State:", store.getState()); // Expected: { count: 0 }

console.log("\nSCENARIO 2: Incrementing the Counter");
store.dispatch({ type: "ADD" }); // Increment to 1
store.dispatch({ type: "ADD" }); // Increment to 2

console.log("\nSCENARIO 3: Decrementing the Counter");
store.dispatch({ type: "SUBTRACT" }); // Decrement to 1

console.log("\nSCENARIO 4: Resetting the Counter");
store.dispatch({ type: "RESET" }); // Reset to 0