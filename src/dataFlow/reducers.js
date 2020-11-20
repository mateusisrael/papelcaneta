import {
  GET_TASKS_STARTED,
  GET_TASKS_SUCESS,
  GET_TASKS_FAILURE
} from './actions'

const INITIAL_STATE = {
  loading: false,
  payload: null,
  err: null
}

export const getTasksReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_TASKS_STARTED:
      return {
        ...state,
        loading: true
      }
    
    case GET_TASKS_SUCESS:
      return {
        ...state,
        loading: false,
        payload: {
          ...action.payload
        }
      }

    case GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      }

    default:
      return state;
  }
}
