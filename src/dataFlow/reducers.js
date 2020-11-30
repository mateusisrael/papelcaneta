import {
  GET_TASKS_STARTED,
  GET_TASKS_SUCESS,
  GET_TASKS_FAILURE,

  ADD_TASK,
  ADD_TASK_STARTED,
  ADD_TASK_SUCESS,
  ADD_TASK_FAILURE,

  RMV_TASK_STARTED,
  RMV_TASK_SUCESS,
  RMV_TASK_FAILURE
} from './actions'

const GET_TASKS_INITIAL_STATE = {
  loading: false,
  payload: null,
  err: null
}

export const getTasksReducer = (state = GET_TASKS_INITIAL_STATE, action) => {
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

const ADD_TASK_INITIAL_STATE = {
  loading: false,
  payload: null,
  err: null
}
export const addTaskReducer = (state = ADD_TASK_INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TASK_STARTED:
      return {
        ...state,
        loading: true
      }
    
    case ADD_TASK_SUCESS:
      return {
        ...state,
        loading: false,
        message: {
          ...action.message
        }
      }

    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.err
      }

    default:
      return state;
  }
}

const RMV_TASKS_INITIAL_STATE = {
  loading: false,
  removed: undefined,
  err: null
}

export const removeTaskReducer = ( state = RMV_TASKS_INITIAL_STATE, action) => {
  switch(action.type) {
    case RMV_TASK_STARTED:
      return {
        ...state,
        loading: true
      }

    case RMV_TASK_SUCESS: 
    return {
      ...state,
      loading: false,
      removed: true
    }

    case RMV_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        removed: false,
        err: true,
      }

    default:
      return state
  }
}