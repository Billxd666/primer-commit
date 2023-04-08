import { Link } from "react-router-dom";

function NavXl() {
  return (
    <div className="divide-y divide-blue-200 ">
      <nav className="flex sm:justify-center space-x-5 px-3 text-left md:cursor-pointer">
        {[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Portafolio", "/portafolio"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <div>
            <div className=" ">
              <Link
                to={url}
                className="py-7 rounded-lg px-3  text-black font-medium hover:bg-green hover:text-gray-50  "
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default NavXl;
