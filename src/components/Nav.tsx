import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="navbar bg-white border-b border-gray-100 px-8 lg:px-20 h-20 sticky top-0">

      {/* Logo */}
      <div className="navbar-start">
        <a className="flex items-center gap-3">
          <img
            src={logo}
            alt="DevStack Logo"
            className="w-36 object-contain"
          />
        </a>
      </div>


      {/* Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 text-[16px] font-medium text-slate-600">

          <li>
            <a className="text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a className="hover:text-pink-500">
              Technologies
            </a>
          </li>

          <li>
            <a className="hover:text-pink-500">
              Projects
            </a>
          </li>

          <li>
            <a className="hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a className="hover:text-pink-500">
              Contact
            </a>
          </li>

        </ul>
      </div>


      {/* Buttons */}
      <div className="navbar-end gap-5">

        <button className="hidden sm:block text-slate-700 font-medium">
          Sign In
        </button>


        <button className="
          btn 
          border-none
          rounded-full
          px-7
          text-white
          bg-gradient-to-r
          from-pink-500
          to-purple-600
          hover:opacity-90
        ">
          Sign Up
        </button>


        {/* Mobile */}
        <div className="dropdown dropdown-end lg:hidden">

          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white shadow rounded-box w-52 mt-3"
          >
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Navbar;