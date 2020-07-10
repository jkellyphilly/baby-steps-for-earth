const defaultState = {
  goals: [],
  loading: false
}

const babyStepsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_GOALS':
      return {
        ...state,
        goals: [...state.goals],
        loading: true
      }

    case 'ADD_GOALS':
      return {
        ...state,
        goals: action.goals,
        loading: false
      }

    case 'ADD_NEW_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.new_goal],
        loading: false
      }

    default:
      return state;
  }
}

export default babyStepsReducer;
