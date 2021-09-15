import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";

function Input({ name, value, placeholder, completed, larger, mb }) {
  const firestore = useFirestore();
  const router = useRouter();
  const { id } = router.query;
  function updateField(e) {
    const { value } = e.target;
    const ref = doc(firestore, "lists", id);
    updateDoc(ref, {
      [name]: value,
    });
  }

  return (
    <input
      onChange={updateField}
      className={`block py-3 px-3 lg:px-5 w-full ${
        larger ? "text-xl lg:text-2xl" : "lg:text-lg"
      } leading-tight text-white align-middle bg-primary-very-dark-desaturated-blue focus-visible:outline-none caret-primary ${
        completed
          ? "line-through text-primary-very-dark-gray-blue placeholder-primary-very-dark-gray-blue"
          : ""
      }`}
      value={value}
      placeholder={placeholder}
      disabled={completed}
    />
  );
}

export default Input;
