import { doc, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import uuid from "react-uuid";
import AddButton from "../Buttons/Add";

function AddTask() {
  const firestore = useFirestore();
  const router = useRouter();
  const { id } = router.query;
  function createTask() {
    const ref = doc(firestore, "lists", id);
    const tid = uuid();
    setDoc(
      ref,
      {
        tasks: {
          [tid]: {
            title: "",
            completed: false,
            createdAt: new Date(),
          },
        },
      },
      { merge: true }
    );
  }

  return <AddButton label="Add task" onClick={createTask} />;
}

export default AddTask;
