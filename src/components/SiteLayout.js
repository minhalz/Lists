import Header from "./Header";

function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="relative px-3 mx-auto -mt-40 lg:-mt-36 max-w-[600px]">
        {children}
      </main>
    </div>
  );
}

export default SiteLayout;
