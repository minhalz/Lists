import {
  collection,
  query,
  where,
  writeBatch,
  getDocs,
  doc,
} from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useSession } from "next-auth/client";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function DeleteData() {
  const firestore = useFirestore();
  const [session, loading] = useSession();
  const [startDelete, setStartDelete] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function deleteData() {
    setStartDelete(true);
    const batch = writeBatch(firestore);
    const listsCollection = collection(firestore, "lists");
    const listsQuery = query(
      listsCollection,
      where("userId", "==", session.user.id)
    );

    const querySnapshot = await getDocs(listsQuery);

    querySnapshot.forEach((document) => {
      const ref = doc(firestore, "lists", document.id);
      batch.delete(ref);
    });

    await batch.commit();

    setDeleted(true);
  }

  return (
    <>
      <NextSeo title="Delete Your Data" />
      <div className="my-12 lg:my-16 mx-auto space-y-6 max-w-[750px] md:text-lg text-white">
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Delete your data
        </h2>
        {deleted ? (
          <p>Data has been deleted</p>
        ) : (
          <>
            <p>
              Are you sure you want to delete all your data? Deleting data will
              erase any trace of your use of this app including lists and your
              Facebook User Id associated with said lists. You will not be able
              to get your lists back.
            </p>
            <button
              className="p-4 w-full bg-red-500 hover:bg-red-600 rounded"
              onClick={deleteData}
            >
              {startDelete ? "Deleting..." : "Delete my data"}
            </button>
          </>
        )}
      </div>
    </>
  );
}
