function Task(props) {
  // props.name
  const removeTask = () => {
    const newArray = [
      ...props.taskList.splice(0, props.index),
      ...props.taskList.splice(props.index + 1),
    ];
    props.setTaskList(newArray);
  };
  return (
    <div>
      <button onClick={removeTask}>Remove me</button>
      {props.name}
    </div>
  );
}

export default Task;
