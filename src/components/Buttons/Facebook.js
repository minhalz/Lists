import { signIn } from "next-auth/client";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

function FacebookButton() {
  return (
    <button
      type="button"
      className="flex items-center py-3 px-3 text-lg leading-none text-white bg-[#1877f2] rounded-md"
      onClick={() =>
        signIn("facebook", {
          callbackUrl: `${window.location.origin}/`,
        })
      }
    >
      <span className="mr-1 text-2xl">
        <FaFacebook />
      </span>
      Continue with Facebook
    </button>
  );
}

export default FacebookButton;
