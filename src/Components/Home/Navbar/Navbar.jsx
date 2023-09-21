import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <a ></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to="/recepies">Recipies</Link>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
