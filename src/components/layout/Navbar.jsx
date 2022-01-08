import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [navShow, setNavShow] = useState(false);

  const navClass = () => {
    if (navShow) {
      return "";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="navbar mb-2 shadow-lg bg-gray-900 text-neutral-200 rounded-b-lg flex flex-col">
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center flex-row">
          <RiMovie2Line className="text-5xl text-orange-700" />
          <Link to="/" className="text-2xl">
            MovieList
          </Link>
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch gap-5">
            <Link className="rounded-lg hover:bg-gray-700/40 px-5 py-2" to="/">
              Home
            </Link>
            <Link className="rounded-lg hover:bg-gray-700/40 px-5 py-2" to="/">
              About
            </Link>
          </div>
        </div>
        <div className="flex-none lg:hidden">
          <button
            onClick={() => setNavShow(!navShow)}
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`flex flex-col gap-5 ${navClass()} lg:hidden`}>
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
