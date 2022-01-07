import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between px-10 bg-gray-900 py-5 drop-shadow-lg text-neutral-200 mb-8">
      <div className="flex flex-row justify-center items-center">
        <RiMovie2Line className="text-5xl text-orange-700" />
        <Link to="/" className="text-2xl">
          MovieList
        </Link>
      </div>
      <div className="text-lg flex flex-row gap-x-2">
        <Link className="rounded-lg hover:bg-gray-700/40 px-5 py-2" to="/">
          Home
        </Link>
        <Link className="rounded-lg hover:bg-gray-700/40 px-5 py-2" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
