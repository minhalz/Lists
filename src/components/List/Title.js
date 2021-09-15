import LayoutItem from "../Layout/Item";
import Toggler from "./Toggler";
import Input from "./Input";
import DeleteList from "./DeleteList";

function Title({ list }) {
  return (
    <LayoutItem tag="div" rounded={true} mb={true}>
      <Toggler name="completed" completed={list.completed} />
      <Input
        name="title"
        value={list.title}
        placeholder="Enter the list name"
        completed={list.completed}
        larger={true}
      />
      <DeleteList id={list.id} />
    </LayoutItem>
  );
}

export default Title;
