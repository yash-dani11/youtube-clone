import React from "react";
import LOGO from "../logo.svg";
import HAMBURGER from "../assets/hamburger.svg";
import SEARCH from "../assets/search.svg"
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../redux/sidebarSlice";
import { Link } from "react-router-dom";
import AVATAR from "../assets/avatar.jpg";
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
      <div className="rounded-3xl border border-gray-200 flex col-span-12 mx-auto w-1/2 h-10">
        <input type="text" placeholder="Search" className="rounded-3xl p-1 px-4 w-[90%] rounded-tr-none rounded-br-none focus:outline-1"></input>
        <button className="block rounded-3xl sm:border-l border-gray-200 rounded-tl-none rounded-bl-none px-5 bg-transparent sm:bg-gray-100">
            
          <img src={SEARCH} alt="Search" className="h-6 w-6"></img>
        </button>
      </div>
      
        <img src={AVATAR} alt="User" className="w-8 h-8 rounded-full cursor-pointer col-span-1"></img>
      
    </div>
  );
};

export default Header;
