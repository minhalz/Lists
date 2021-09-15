import { collection, doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { useRouter } from "next/router";
import SecondaryActions from "../../src/components/List/SecondaryActions";
import Title from "../../src/components/List/Title";
import AddTask from "../../src/components/List/AddTask";
import Tasks from "../../src/components/List/Tasks";
import Loader from "../../src/components/Loader";
import { NextSeo } from "next-seo";

function List() {
  // set up query
  const firestore = useFirestore();
  const router = useRouter();
  let id = "0";
  if (router.isReady) {
    id = router.query.id;
  }

  const ref = doc(firestore, "lists", id);

  const { status, data: list } = useFirestoreDocData(ref, { idField: "id" });

  if (list) {
    return (
      <>
        <NextSeo title={list.title || "No title written"} />
        <SecondaryActions title={list.title || "No title written"} />
        <Title list={list} />
        <Tasks tasks={list.tasks} />
        {!list.completed && <AddTask />}
      </>
    );
  }

  return <Loader />;
}

export default List;

List.public = true;
