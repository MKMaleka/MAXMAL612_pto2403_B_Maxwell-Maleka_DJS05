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
    // Handle different actions
    switch (action.type) {
      case "ADD": // Increment the count
        return { count: state.count + 1 };
      default: // Return the current state if the action is unknown
        return state;
    }
  }
  
  // Create the store using the reducer
  const store = createStore(tallyReducer);
  
  // SCENARIO 2: Incrementing the Counter, Dispatching an "ADD" action twice
  store.dispatch({ type: "ADD" }); // Increment to 1
  store.dispatch({ type: "ADD" }); // Increment to 2
  
  // Logs the final state
  console.log("Final State:", store.getState());