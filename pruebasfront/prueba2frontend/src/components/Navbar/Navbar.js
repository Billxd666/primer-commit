
import { Link } from "react-router-dom";
import { useState } from "react";
import NavMobile from "./NavMobile";
import NavXl from "./NavXl";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link
            to={"/"}
            className=" md:cursor-pointer h-2"
          >
            Axolotl
          </Link>
          <div className="text-3xl md:hidden"onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
          <ul className="md:flex hidden uppercase items-center gap-8">
            <NavXl />
          </ul>

          <ul
          className={`
        md:hidden bg-gray-100 fixed w-full top-0 overflow-y-auto bottom-0 py-20 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavMobile/>
        </ul>


      </div>
    </nav>
  );
}

export default Navbar;
