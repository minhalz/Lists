import { FaShareAlt } from "@react-icons/all-files/fa/FaShareAlt";

function Share({ title }) {
  function shareList() {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location,
      });
    }
  }
  return (
    <button
      type="button"
      className="flex items-center text-white hover:text-primary"
      onClick={shareList}
    >
      <span className="mr-2">
        <FaShareAlt />
      </span>
      Share this list
    </button>
  );
}

export default Share;
