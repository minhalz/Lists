import { doc, updateDoc, deleteField } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import RemoveButton from "../Buttons/Remove";

function DeleteTask({ tid }) {
  const firestore = useFirestore();
  const router = useRouter();
  const { id } = router.query;
  function removeTask() {
    const ref = doc(firestore, "lists", id);
    updateDoc(ref, {
      [`tasks.${tid}`]: deleteField(),
    });
  }

  return <RemoveButton onClick={removeTask} />;
}

export default DeleteTask;
