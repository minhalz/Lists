import Panel from "../Layout/Panel";
import ListItem from "./Item";
import Placeholder from "../Layout/Placeholder";

function ListItems({ lists }) {
  if (lists.length === 0) {
    return (
      <Placeholder>
        <p>Create a new list by clicking the button above.</p>
      </Placeholder>
    );
  }
  return (
    <Panel tag="ul">
      {lists.map((list) => (
        <ListItem
          key={list.id}
          id={list.id}
          title={list.title}
          completed={list.completed}
        />
      ))}
    </Panel>
  );
}

export default ListItems;
