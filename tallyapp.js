// Redux store
function createStore(reducer) {
    let state; // Variable to hold the current state
  
    // Method to get the current state
    function getState() {
      return state;
    }
  
    // Method to dispatch actions (not used yet but initializes the state)
    function dispatch(action) {
      state = reducer(state, action); // Update state using the reducer
    }
  
    // Initialize the state with a default action
    dispatch({ type: "__INIT__" });
  
    // Return an object with methods to access and interact with the store
    return {
      getState,
      dispatch,
    };
  }
  
  // Reducer function to handle the state
  function tallyReducer(state = { count: 0 }, action) {
    // No actions for this scenario; return the initial state
    return state;
  }
  
  // Create the store using the reducer
  const store = createStore(tallyReducer);
  
  // SCENARIO 1: Initial State Verification
  console.log("Initial State:", store.getState());