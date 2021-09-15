import { FaClipboardList } from "@react-icons/all-files/fa/FaClipboardList";

function Placeholder({ children }) {
  return (
    <div className="flex flex-col justify-center items-center py-3 px-5 mb-6 h-[200px] text-lg text-center text-white align-middle bg-primary-very-dark-desaturated-blue rounded-md shadow-lg">
      <span className="mb-4 text-4xl">
        <FaClipboardList />
      </span>
      <p>Looking a little empty here.</p>
      {children}
    </div>
  );
}

export default Placeholder;
