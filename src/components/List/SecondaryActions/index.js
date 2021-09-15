import Share from "./Share";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
const Back = dynamic(() => import("./Back"));

function SecondaryActions({ title }) {
  const [session, loading] = useSession();

  return (
    <div className="flex justify-between mb-3">
      {session && <Back />}
      <Share title={title} />
    </div>
  );
}

export default SecondaryActions;
