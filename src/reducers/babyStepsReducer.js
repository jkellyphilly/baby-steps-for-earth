const babyStepsReducer = (state = { goals: [], loading: false }, action) => {
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

    default:
      return state;
  }
}

export default babyStepsReducer;
