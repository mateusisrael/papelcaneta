import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { getTasks } from "../../dataFlow/actions";


const mapStateToProps = ({getTasksReducer}) => ({
  loading: getTasksReducer.loading,
  payload: getTasksReducer.payload
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: (uri) => dispatch(getTasks(uri))
  }
}


const TasksList = ({ payload, loading, getTasks }) => {
  const data = payload;
  const tasks = data && data.data;

  const title = tasks !== null ? (
    tasks.length === 0 ? document.title : `(${tasks.length}) ${document.title}`
  ) : document.title;
  useEffect(() => {
    document.title = `${title}`
  })

  
  const render = () => {
    return(
      loading ? <span>Carregando...</span> : (
        tasks === null ? <button onClick={() => getTasks("http://localhost:3004/tasks")}>get data</button> : (
          <div className="taskList">
            {
              tasks.length === 0 ? <span>Sem tarefas</span> : (

                tasks.map((task, id) => {
                  return (
                    <div className="task" key={id}>
                      <h2>{task.title}</h2>
                      <p>{task.description}</p>
                    </div>
                  );
                })
              )
            }
          </div>
        )
      )
    );
  }



  return render();
};


// const TasksList = ({ tasks }) => {
//   return (
//     <div className="taskList">
//       {tasks
//         ? tasks.map((task, id) => {
//             return (
//               <div className="task" key={id}>
//                 <h2>{task.title}</h2>
//                 <p>{task.description}</p>
//               </div>
//             );
//           })
//         : null}
//     </div>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
