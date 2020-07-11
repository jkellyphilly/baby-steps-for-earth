const defaultState = {
  plans: [],
  goals: [],
  loadingPlans: false,
  loadingGoals: false
}

const babyStepsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_GOALS':
      return {
        ...state,
        goals: [...state.goals],
        loadingGoals: true
      }

    case 'LOADING_PLANS':
      return {
        ...state,
        plans: [...state.plans],
        loadingPlans: true
      }

    case 'ADD_PLANS':
      return {
        ...state,
        plans: action.plans,
        loadingPlans: false
      }

    case 'ADD_GOALS':
      return {
        ...state,
        goals: action.goals,
        loadingGoals: false
      }

    case 'ADD_NEW_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.new_goal],
        loadingGoals: false
      }

    default:
      return state;
  }
}

export default babyStepsReducer;
