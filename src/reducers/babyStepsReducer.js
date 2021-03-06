// Define default state of Redux store
const defaultState = {
  plans: [],
  goals: [],
  loadingPlans: false,
  loadingGoals: false,
  myGoals: [],
  currentSearchTerm: "all",
  alertMessageExplore: "",
  alertMessageProfile: "",
  username: ""
}

// Update the state in Redux store based on input action
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
        loadingPlans: false,
        alertMessageExplore: "",
        alertMessageProfile: "Successfully created plan!",
        username: action.new_plan.attributes.username,
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
        myGoals: [...state.myGoals, action.goal],
        alertMessageExplore: "Goal added to your profile!",
        addedGoal: action.goal
      }

    case 'REMOVE_GOAL_FROM_MY_PLAN':
      const idx = state.myGoals.findIndex(goal => goal.id === action.goal.id);
      return {
        ...state,
        myGoals: [...state.myGoals.slice(0, idx), ...state.myGoals.slice(idx+1)]
      }

    case 'UPDATE_CURRENT_SEARCH_TERM':
      return {
        ...state,
        currentSearchTerm: action.updatedSearchTerm
      }

    case 'REMOVE_ALERT_MESSAGE_EXPLORE':
      return {
        ...state,
        alertMessageExplore: ""
      }

    case 'REMOVE_ALERT_MESSAGE_PROFILE':
      return {
        ...state,
        alertMessageProfile: ""
      }

    default:
      return state;
  }
}

export default babyStepsReducer;
