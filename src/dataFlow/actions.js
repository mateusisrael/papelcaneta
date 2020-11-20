import axios from 'axios'
export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_STARTED = 'GET_TASK_STARTED';
export const GET_TASKS_SUCESS = 'GET_TASKS_SUCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';


export const getTasks = (uri) => {
  return async (dispatch) => {
    dispatch(getTasksStarted());

    axios
      .get(uri)
      .then(res => {
        setTimeout(() => {
          dispatch(getTasksSucess(res.data))

        }, 1000)
      })
      .catch(err => {
        dispatch(getTasksFailure(err))
      });
  }
}

export const getTasksStarted = () => {
  return {
    type: GET_TASKS_STARTED
  }
}

export const getTasksSucess = (data) => {

  return {
    type: GET_TASKS_SUCESS,
    payload: {
      data
    }
  }
}

export const getTasksFailure = (err) => {
  return {
    type: GET_TASKS_FAILURE,
    payload: {
      err
    }
  }
}
