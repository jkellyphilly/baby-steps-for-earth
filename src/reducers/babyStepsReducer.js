const defaultState = {
  plans: [],
  goals: [],
  loadingPlans: false,
  loadingGoals: false,
  myGoals: []
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

    case 'ADD_NEW_PLAN':
      return {
        ...state,
        plans: [...state.plans, action.new_plan],
        myGoals: [],
        loadingPlans: false
      }

    case 'ADD_NEW_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.new_goal],
        loadingGoals: false
      }

    case 'ADD_GOAL_TO_MY_PLAN':
      return {
        ...state,
        myGoals: [...state.myGoals, action.goal]
      }

    default:
      return state;
  }
}

export default babyStepsReducer;
