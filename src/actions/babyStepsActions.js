// Please note: I have configured my API to run on port 4000,
// which is why the fetch calls go there. If you need to change this
// to a different port number or have a different method of completing this,
// please open a PR.

// For these functions, I am using Redux Thunk to provide my dispatcher...
// TODO: finish describing these files

export const fetchGoals = (input) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GOALS' });

    fetch(`http://localhost:4000/goals?tags=${input}`)
    .then(resp => resp.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_GOALS', goals: responseJSON.data})
    })
  }
}

export const createGoal = (info) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GOALS' });

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ title: info.title, content: info.content })
    }

    fetch('http://localhost:4000/goals', configObj)
    .then(resp => resp.json())
    .then(responseJSON => {
      if (responseJSON.message) {
        alert(responseJSON.message)
      } else {
        dispatch({ type: 'ADD_NEW_GOAL', new_goal: responseJSON.data})
      }
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
