import Input from "./Input";
import Toggler from "./Toggler";
import DeleteTask from "./DeleteTask";
import LayoutItem from "../Layout/Item";

function Task({ tid, value, completed }) {
  return (
    <LayoutItem tag="li">
      <Toggler name={`tasks.${tid}.completed`} completed={completed} />
      <Input
        name={`tasks.${tid}.title`}
        value={value}
        placeholder="Add task name here"
        completed={completed}
      />
      <DeleteTask tid={tid} />
    </LayoutItem>
  );
}

export default Task;
