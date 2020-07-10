export const fetchGoals = (input) => {
  return (dispatch) => {
    // Initially, dispatch LOADING_GOALS action
    dispatch({ type: 'LOADING_GOALS' });

    // Then perform the fetch
    // NOTE: I have configured my API to run on port 4000.
    fetch(`http://localhost:4000/goals?tags=${input}`)
    .then(resp => resp.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_GOALS', goals: responseJSON.data})
    })
  }
}

// export const fetchPlans = () => {
//   return (dispatch) => {
//     // Initially, dispatch LOADING_PLANS action
//     dispatch({ type: 'LOADING_PLANS' });
//
//     // Then perform the fetch
//     // NOTE: I have configured my API to run on port 4000.
//     fetch("http://localhost:4000/plans")
//     .then(resp => resp.json())
//     .then(responseJSON => {
//       dispatch({ type: 'ADD_PLANS', plans: responseJSON.data})
//     })
//   }
// }
