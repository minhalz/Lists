import Header from "./Header";
import Link from "next/link";

function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="relative px-3 mx-auto -mt-40 lg:-mt-36 max-w-[600px]">
        {children}
      </main>
      <div className="flex relative justify-center py-4">
        <Link href="/privacy-policy">
          <a className="text-white hover:underline">Privacy Policy</a>
        </Link>
      </div>
    </div>
  );
}

export default SiteLayout;
