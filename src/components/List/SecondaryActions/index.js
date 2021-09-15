import Back from "./Back";
import Share from "./Share";

function SecondaryActions({ title }) {
  return (
    <div className="flex justify-between mb-3">
      <Back />
      <Share title={title} />
    </div>
  );
}

export default SecondaryActions;
