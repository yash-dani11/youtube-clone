import React, { useState,useRef, useEffect } from "react";
import LOGO from "../logo.svg";
import HAMBURGER from "../assets/hamburger.svg";
import SEARCH from "../assets/search.svg"
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/sidebarSlice";
import { Link, useNavigate } from "react-router-dom";
import AVATAR from "../assets/avatar.jpg";
import fetchJsonp from "fetch-jsonp";
import { AUTO_COMPLETE_API } from "../utils/constants";
import AutoComplete from "./AutoComplete";
import { cacheKeyWords, setSearchValue } from "../redux/searchSlice";
const Header = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const viewSideBar = ()=>{
        dispatch(toggleSideBar());
    }
    const navigate = useNavigate();
    const suggestionList = useSelector(state=>state.search?.autoSuggest);
    const searchString = useSelector(state=>state.search?.searchBarValue);
    const [suggestions,setSuggestions] = useState([]);
    const [isInFocus,setIsInFocus] = useState(false);
    const handleSearch = async (query)=>{
      if(query){
        try {
          if(suggestionList[query]){
            setSuggestions(suggestionList[query]);
          }else{
            const response = await fetchJsonp(`${AUTO_COMPLETE_API}${query}`)
            const results = await response.json();
            const newSuggestions = results?.[1]?.slice(0,10);
            dispatch(cacheKeyWords({keyword:query,results:newSuggestions}));
            setSuggestions(newSuggestions);
          }
        } catch (error) {
          console.log("Unable to get Suggestions",error);
        }
        
      }
      
    }
    useEffect(()=>{ 

      const timer = setTimeout(handleSearch,400,searchString);
      return ()=>{
        clearTimeout(timer);
      }
    },[searchString]);
    const handleInputChange = (event)=>{
      const query = event.target.value
      dispatch(setSearchValue(query));
    }
    const searchVideos = (event)=>{
        inputRef?.current.blur();
        event.preventDefault();
        navigate(`/results?search_query=${searchString}`);
    }
  return (
    <><div className="grid grid-flow-col p-4 pt-2 h-14 fixed w-full top-0 left-0 bg-white">
    <div className="flex items-center col-span-1">
      <button className="hidden sm:block" onClick={viewSideBar}>
        <img src={HAMBURGER} alt="Menu"></img>
      </button>
      <Link to="/"><img src={LOGO} alt="Youtube" className="w-24 h-5 ml-4"></img></Link>
    </div>
    <form className="rounded-3xl border border-gray-200 flex col-span-12 mx-auto w-1/2 h-8 sm:h-10" onSubmit={searchVideos}>
      <input type="text" placeholder="Search" className="rounded-3xl p-0.5 sm:p-1 px-2 sm:px-4 w-[90%] rounded-tr-none rounded-br-none focus:outline-1" onChange={handleInputChange} onFocus={()=>setIsInFocus(true)} value={searchString} onBlur={()=>setTimeout(()=>{setIsInFocus(false)},300)} ref={inputRef}></input>
      <button className="block rounded-3xl sm:border-l border-gray-200 rounded-tl-none rounded-bl-none px-3 sm:px-5 bg-transparent sm:bg-gray-100">
          
        <img src={SEARCH} alt="Search" className="h-5 w-5 sm:h-6 sm:w-6"></img>
      </button>
    </form>
      <img src={AVATAR} alt="User" className="w-8 h-8 rounded-full cursor-pointer col-span-1"></img>
    
  </div>
  {isInFocus && suggestions.length>0&&<AutoComplete suggestions={suggestions}></AutoComplete>}</>
  );
};

export default Header;
