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


// ADD TASK
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_STARTED = 'ADD_TASK_STARTED';
export const ADD_TASK_SUCESS = 'ADD_TASK_SUCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const addTask = (uri, task) => {
  return async (dispatch) => {
    dispatch(addTaskStarted());

    axios
      .post(uri, {
        "title": task.title,
        "description": task.description
      })
      .then(res => {
        setTimeout(() => {
          dispatch(addTaskSucess(res.data))

        }, 1000)
      })
      .catch(err => {
        dispatch(addTaskFailure(err))
      });
  }
}

export const addTaskStarted = () => {
  return {
    type: ADD_TASK_STARTED
  }
}

export const addTaskSucess = (data) => {

  return {
    type: ADD_TASK_SUCESS,
    payload: {
      data
    }
  }
}

export const addTaskFailure = (err) => {
  return {
    type: ADD_TASK_FAILURE,
    payload: {
      err
    }
  }
}