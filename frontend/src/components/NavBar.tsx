import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo-second.svg";
import { Bars2Icon } from "@heroicons/react/24/outline";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="shadow bg-white fixed w-full left-0 z-20">
      <div className="navbar py-4 container">
        <div className="navbar-start">
          <Link to={"/"} className="w-52 md:w-60 lg:w-64">
            <Logo className="w-full" />
          </Link>
        </div>

        <div className="hidden sm:flex navbar-end gap-4">
          <button className="btn no-animation">Daxil ol</button>
          <button className="btn btn-primary no-animation">Qeydiyyat</button>
        </div>

        <div className="sm:hidden navbar-end relative">
          <button
            className="btn absolute z-10"
            onClick={() => setOpen(!isOpen)}
          >
            <Bars2Icon className="w-5 h-5" />
          </button>

          <div
            className={`fixed flex h-full flex-col ${
              isOpen ? "" : "scale-x-0 translate-x-full"
            } transition-all px-8 gap-5 top-0 right-0 pt-40 bg-base-100 duration-500`}
          >
            <button className="btn no-animation btn-wide">Daxil ol</button>
            <button className="btn btn-primary no-animation btn-wide">
              Qeydiyyat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
