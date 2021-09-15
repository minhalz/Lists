import Link from "next/link";

function Item({ title, id, completed = false }) {
  return (
    <li className="border-b last:border-b-0 border-primary-very-dark-gray-blue">
      <Link href={`list/${id}`}>
        <a
          className={`${
            completed
              ? "line-through text-primary-very-dark-gray-blue"
              : "text-white"
          } block py-3 px-3 lg:px-5 lg:text-lg leading-tight align-middle bg-primary-very-dark-desaturated-blue hover:bg-primary-very-dark-desaturated-blue-hover`}
        >
          {title ? title : "No title written"}
        </a>
      </Link>
    </li>
  );
}

export default Item;
