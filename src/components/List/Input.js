import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

function Input({ name, value, placeholder, completed, larger, mb }) {
  const [caretPosition, setCaretPosition] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const firestore = useFirestore();
  const router = useRouter();
  const { id } = router.query;
  const ref = useRef(null);
  const input = ref.current;
  if (input) input.setSelectionRange(caretPosition, caretPosition);

  function updateField(e) {
    const { value, selectionStart } = e.target;
    setInputVal(value);
    setCaretPosition(selectionStart);
    const ref = doc(firestore, "lists", id);
    updateDoc(ref, {
      [name]: value,
    });
  }

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  return (
    <input
      ref={ref}
      onChange={updateField}
      className={`block py-3 px-3 lg:px-5 w-full ${
        larger ? "text-xl lg:text-2xl" : "lg:text-lg"
      } leading-tight text-white align-middle bg-primary-very-dark-desaturated-blue focus-visible:outline-none caret-primary${
        completed
          ? " line-through text-primary-very-dark-gray-blue placeholder-primary-very-dark-gray-blue"
          : ""
      }`}
      value={inputVal}
      placeholder={placeholder}
      disabled={completed}
      spellCheck="true"
    />
  );
}

export default Input;
