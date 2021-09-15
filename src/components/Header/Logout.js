import { signOut } from "next-auth/client";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

function Logout() {
  return (
    <button
      className="text-xl hover:text-primary"
      onClick={() =>
        signOut({
          redirect: false,
          callbackUrl: `${window.location.origin}/login`,
        })
      }
    >
      Signout
    </button>
  );
}

export default Logout;
