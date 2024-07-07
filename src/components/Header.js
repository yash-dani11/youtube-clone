import React from "react";
import LOGO from "../logo.svg";
import HAMBURGER from "../assets/hamburger.svg";
import SEARCH from "../assets/search.svg"
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../redux/sidebarSlice";
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();
    const viewSideBar = ()=>{
        dispatch(toggleSideBar());
    }
  return (
    <div className="grid grid-flow-col p-4 pt-2 h-14 fixed w-full top-0 left-0 bg-white">
      <div className="flex items-center col-span-1">
        <button className="hidden sm:block">
          <img src={HAMBURGER} alt="Menu" onClick={viewSideBar}></img>
        </button>
        <Link to="/"><img src={LOGO} alt="Youtube" className="w-24 h-5 ml-4"></img></Link>
      </div>
      <div className="rounded-2xl border border-gray-400 flex col-span-10 mx-auto w-1/2">
        <input type="text" placeholder="Search" className="rounded-2xl p-1 px-3 w-[90%] rounded-tr-none rounded-br-none"></input>
        <button className="rounded-2xl border-l border-gray-400 rounded-tl-none rounded-bl-none px-2 w-[10%] bg-gray-100">
            
          <img src={SEARCH} alt="Search"></img>
        </button>
      </div>
      <div className="col-span-1 flex items-center">
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
