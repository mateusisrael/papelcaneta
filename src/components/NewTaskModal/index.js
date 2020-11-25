import React from "react";
import { IoMdColorPalette } from "react-icons/io";
import { connect } from 'react-redux'
import { addTask, getTasks } from "../../dataFlow/actions";
import ColorSelector from "./ColorSelector";
import "./styles.css";

const mapStateToProps = (state) => ({
  err: state.err,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (uri, task) => dispatch(addTask(uri, task)),
  getTasks: (uri) => dispatch(addTask(uri))
})

const NewTaskModal = ({ onClickClose, onClickSave, addTask }) => {
  const useState = React.useState;
  const [style, setStyle] = useState("newTaskModal openAnimation");
  const [colorSelectorState, setColorSelectorState] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    const currentTask = {
      title: event.target.title.value,
      description: event.target.description.value
    };

    addTask("http://localhost:3004/tasks", currentTask)

    return onClickSave();
  };


  return (
    <form onSubmit={handleSave} className={style}>
      <label className="row">
        <input
          className="title"
          type="text"
          name="title"
          placeholder="New Task"
        ></input>
        <button type="submit" className="saveButton">
          Salvar
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setStyle("newTaskModal closeAnimation");
            setTimeout(() => {
              onClickClose();
            }, 100);
          }}
          className="quitButton"
        >
          X
        </button>
      </label>

      <textarea
        placeholder="create a note..."
        className="description"
        name="description"
      ></textarea>
      <IoMdColorPalette
        onMouseOver={() => {
          setColorSelectorState(!colorSelectorState);
          console.log(colorSelectorState);
        }}
        className="colorIcon"
      />
      {colorSelectorState ? <ColorSelector /> : null}
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskModal);
