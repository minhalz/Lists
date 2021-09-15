import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

function Toggler({ name, completed }) {
  const firestore = useFirestore();
  const router = useRouter();
  const { id } = router.query;

  function toggleState() {
    const ref = doc(firestore, "lists", id);
    updateDoc(ref, {
      [name]: !completed,
    });
  }

  return (
    <button
      type="button"
      onClick={toggleState}
      className={`relative text-white text-xs flex-shrink-0 flex justify-center items-center w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] ${
        completed
          ? "border-0"
          : "border-2 border-white before:rounded-full before:absolute before:inset-0 before:bg-primary-very-dark-desaturated-blue hover:border-0 hover:before:inset-[2px]"
      }`}
    >
      {completed && <FaCheck />}
    </button>
  );
}

export default Toggler;
