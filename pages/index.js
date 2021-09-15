import { useSession } from "next-auth/client";
import { collection, query, where, orderBy } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import AddList from "../src/components/Lists/AddList";
import ListItems from "../src/components/Lists/Items";
import Loader from "../src/components/Loader";
import { NextSeo } from "next-seo";

function Lists() {
  // set up query
  const firestore = useFirestore();
  const listsCollection = collection(firestore, "lists");
  const [session, loading] = useSession();
  const listsQuery = query(
    listsCollection,
    where("userId", "==", session.user.id),
    orderBy("createdAt", "desc")
  );

  // ReactFire!
  const { status, data: lists } = useFirestoreCollectionData(listsQuery, {
    idField: "id", // this field will be added to the object created from each document
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <NextSeo title="Your Lists" />
      <AddList />
      <ListItems lists={lists} />
    </>
  );
}

export default Lists;
