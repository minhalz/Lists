import LayoutPanel from "../Layout/Panel";
import Task from "./Task";
import Placeholder from "../Layout/Placeholder";

function Tasks({ tasks }) {
  if (Object.keys(tasks).length === 0) {
    return (
      <Placeholder>
        <p>Start adding tasks to your list!</p>
      </Placeholder>
    );
  }
  return (
    <LayoutPanel tag="ul">
      {Object.keys(tasks)
        .sort((a, b) => tasks[a].createdAt - tasks[b].createdAt)
        .map(function (key, index) {
          return (
            <Task
              key={key}
              tid={key}
              value={tasks[key].title}
              completed={tasks[key].completed}
            />
          );
        })}
    </LayoutPanel>
  );
}

export default Tasks;
