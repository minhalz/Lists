import { collection, addDoc } from "firebase/firestore";
import { useSession } from "next-auth/client";
import { useFirestore } from "reactfire";
import { useRouter } from "next/router";
import AddButton from "../Buttons/Add";

function AddList() {
  const firestore = useFirestore();
  const router = useRouter();
  const [session, loading] = useSession();

  function createList() {
    (async () => {
      const docRef = await addDoc(collection(firestore, "lists"), {
        title: "",
        tasks: {},
        createdAt: new Date(),
        completed: false,
        userId: session.user.id,
      });
      router.push(`/list/${docRef.id}`);
    })();
  }

  return <AddButton label="Create a list" onClick={createList} />;
}

export default AddList;
