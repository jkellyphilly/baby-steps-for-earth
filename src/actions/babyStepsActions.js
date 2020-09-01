// Configure your baseUrl based on your local environment/where you are
// running the backend code.
const baseUrl = 'http://localhost:4000';

// For these functions, I am using Redux Thunk as the middleware in order to return
// the modified aysnchronous dispatch function

// Fetch all goals from the database, and upon Promise resolution,
// make dispatch of type ADD_GOALS which will update our Redux store
export const fetchGoals = (input) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GOALS' });

    fetch(`${baseUrl}/goals?tags=${input}`)
    .then(resp => resp.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_GOALS', goals: responseJSON.data})
    })
  }
}

// Take information passed to function and make POST request
// to backend - upon Promise resolution, make dispatch of type
// ADD_NEW_GOAL which will update our Redux store with the new goal
export const createGoal = (info) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GOALS' });

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ title: info.title, content: info.content, tags: info.tags })
    }

    fetch(`${baseUrl}/goals`, configObj)
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

// Fetch all plans from the database, and upon Promise resolution,
// make dispatch of type ADD_PLANS which will update our Redux store
export const fetchPlans = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLANS' });

    fetch(`${baseUrl}/plans`)
    .then(resp => resp.json())
    .then(responseJSON => {
      dispatch({ type: 'ADD_PLANS', plans: responseJSON.data})
    })
  }
}

// Take information passed to function and make POST request
// to backend - upon Promise resolution, make dispatch of type
// ADD_NEW_PLAN which will update our Redux store with the new plan
export const createPlan = (info) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLANS' });

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(info)
    }

    fetch(`${baseUrl}/plans`, configObj)
    .then(resp => resp.json())
    .then(responseJSON => {
      if (responseJSON.message) {
        alert(responseJSON.message)
      } else {
        dispatch({ type: 'ADD_NEW_PLAN', new_plan: responseJSON.data})
      }
    })
  }
}
