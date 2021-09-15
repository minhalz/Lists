import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";
import LayoutItem from "../Layout/Item";
function AddButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center py-3 px-3 lg:px-5 mb-6 w-full text-lg leading-none text-center text-white bg-primary-very-dark-desaturated-blue hover:bg-primary-very-dark-desaturated-blue-hover rounded-md"
    >
      <span className="mr-4 text-2xl">
        <FaPlusCircle />
      </span>
      {label}
    </button>
  );
}

export default AddButton;
