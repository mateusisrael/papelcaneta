import * as React from "react";
import NewTaskButton from "./components/NewTaskButton";
import NewTaskModal from "./components/NewTaskModal";
import TasksList from "./components/TasksList";
import "./styles.css";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { getTasksReducer, addTaskReducer, removeTaskReducer } from './dataFlow/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { getTasks } from "./dataFlow/actions";

const appReducer = combineReducers({addTaskReducer, getTasksReducer, removeTaskReducer})
const store = createStore(appReducer, applyMiddleware(thunk));
console.log(store)
export default function App() {
  
  const useState = React.useState;
  const [newTaskModal, setModalState] = useState(false);
  const [tasks, setTask] = useState([]);

  const handleSaveTask = () => {
    // setTask([].concat(tasks, currentTask));
    // tasks.map((task) => console.log(task));
    setModalState(!newTaskModal);
    store.dispatch(getTasks("http://localhost:3004/tasks"))
  };

  const handleRemoveTask = () => (store.dispatch(getTasks("http://localhost:3004/tasks")))

  return (
    <div className="App">
      <Provider store={store}>
        <h1>Tasks</h1>
        {newTaskModal ? (
          <NewTaskModal
            onClickClose={() => setModalState(!newTaskModal)}
            onClickSave={handleSaveTask}
          />
        ) : (
          <NewTaskButton onClick={() => setModalState(!newTaskModal)} />
        )}

        {/* <TasksList tasks={tasks} /> */}
        <TasksList onRemove={handleRemoveTask}/>
      </Provider>
    </div>
  );
}
