# MAXMAL612_pto2403_B_Maxwell-Maleka_DJS05

## How to run the code
1. clone the repo via https://github.com/MKMaleka/MAXMAL612_pto2403_B_Maxwell-Maleka_DJS05.git
2. Open the terminal and navigate to the directory containing the file.
3. Run the code using Node.js -> node tallyapp.js
4. Observe the outputs in the console to verify the screnarios

## Overview of the Approach
1. Reducer - A pure function that takes the current state and an action to produce the next state.
2. Atore implementation -  The store follows a Redux-inspired architecture with getState, dispatch, and subscribe methods.
3. Subscribers (listeners) are notified whenever the state changes, demonstrating the Observer pattern.

## Challenges and Solutions
1. Testing Scenarios - Simulating each user story required careful sequencing of actions to ensure accurate results.
2. Handling state updates cruicial, This was achieved by returning new state objects in the reducer.


