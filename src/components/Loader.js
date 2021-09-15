import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";

function Loader() {
  return (
    <div className="flex justify-center items-center py-3 px-5 h-[200px] text-4xl text-white align-middle bg-primary-very-dark-desaturated-blue rounded-md shadow-lg">
      <span className="animate-spin">
        <FaSpinner />
      </span>
    </div>
  );
}

export default Loader;
