import { signIn } from "next-auth/client";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

function FacebookButton() {
  return (
    <button
      type="button"
      className="flex items-center py-3 px-3 text-lg leading-none bg-white hover:bg-gray-100 text-gray-700 rounded-md"
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}/`,
        })
      }
    >
      <span className="mr-1 text-2xl">
        <FcGoogle />
      </span>
      Continue with Google
    </button>
  );
}

export default FacebookButton;
