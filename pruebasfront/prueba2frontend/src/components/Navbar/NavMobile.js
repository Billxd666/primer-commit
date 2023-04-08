import React from "react";
import { Link } from "react-router-dom";
const NavMobile = () => {
  return (
    <div className="divide-y divide-blue-200 ">
      <nav className="px-3 text-left md:cursor-pointer">
        {[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Portafolio", "/portafolio"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <div>
            <div className=" text-left md:cursor-pointer">
              <Link
                to={url}
                className="py-0 rounded-lg px-1  text-black font-medium hover:bg-slate-100 hover:text-slate-900 "
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavMobile;
