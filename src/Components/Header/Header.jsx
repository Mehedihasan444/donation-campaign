import "./Header.css";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [value,setValue]=useState(false)

  return (
    <div className="relative ">
     
      <div className="hidden md:block">
        <div className=" max-w-7xl mx-auto flex justify-between items-center absolute top-0 left-0 right-0 z-10">
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
      <div className="flex justify-between items-center mx-5 mt-5 relative md:hidden">
        <div className="">
          <img src={logo} alt="" className="w-32" />
        </div>
        <div className="" onClick={()=>setValue(!value)}>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <div className={`${value?"":'hidden'} absolute top-10 bg-white p-3 right-5 z-50`}>
          <ul className="space-y-5">
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
