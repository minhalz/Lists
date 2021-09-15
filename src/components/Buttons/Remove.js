import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

function RemoveButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-lg text-primary-very-dark-gray-blue hover:text-white"
    >
      <FaTrash />
    </button>
  );
}

export default RemoveButton;
