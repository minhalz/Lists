import Link from "next/link";

function Back() {
  return (
    <Link href="/">
      <a className="text-white hover:text-primary">Back to Lists</a>
    </Link>
  );
}

export default Back;
