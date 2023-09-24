import "./Header.css";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="relative mt-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center absolute top-0 left-0 right-0 z-10">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>
        <div className="">
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                } 
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
