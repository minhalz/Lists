import Image from "next/image";
import Background from "../../../public/night-time-background.jpg";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
const Logout = dynamic(() => import("./Logout"));

function Header() {
  const [session, loading] = useSession();
  return (
    <header className="relative h-[300px]">
      <Image
        src={Background}
        alt="List app background"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        placeholder="blur"
        className="opacity-[0.8]"
      />
      <div className="flex relative justify-between items-center px-3 pt-20 mx-auto max-w-[600px] text-white">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-[0.5em] uppercase">
          Lists
        </h1>
        {session && <Logout />}
      </div>
    </header>
  );
}

export default Header;
