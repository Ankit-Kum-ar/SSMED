import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/r&d">R&D Papers</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="p-2 text-xl font-bold">
          <img src="/ss_logo.-removebg-preview.png" alt="" className="h-12" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="btn btn-ghost">
              Home
            </Link>
          </li>
          <li>
            <Link to="/r&d" className="btn btn-ghost">
              R&D Papers
            </Link>
          </li>
          <li>
            <Link to="/products" className="btn btn-ghost">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blog" className="btn btn-ghost">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
