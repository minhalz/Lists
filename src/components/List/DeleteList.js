import { doc, deleteDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import RemoveButton from "../Buttons/Remove";

function DeleteList({ id }) {
  const firestore = useFirestore();
  const router = useRouter();
  function removeList() {
    const ref = doc(firestore, "lists", id);
    (async () => {
      await deleteDoc(ref);
    })();
    router.push("/");
  }

  return <RemoveButton onClick={removeList} />;
}

export default DeleteList;
