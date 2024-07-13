import React from "react";
import SEARCH_ICON from "../assets/search.svg";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom";
const AutoComplete = ({ suggestions }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectSuggestion = (query) => {
    dispatch(setQuery(query));
    navigate(`/results?search_query=${query}`);
  };
  const suggestionsList = suggestions.map((suggestion, index) => (
    <li
      className="hover:bg-gray-200 flex items-center mb-2 p-1 rounded-xl"
      key={index}
      onClick={() => selectSuggestion(suggestion[0])}
    >
      <img src={SEARCH_ICON} className="h-5 w-5" alt="Search"></img>
      <span className="ml-1">{suggestion[0]}</span>
    </li>
  ));
  return (
    <div className="h-64 pt-2 fixed bg-white z-10 rounded-xl shadow-lg border w-1/3 -mt-4 sm:-mt-2 left-[40%] sm:left-[40%] lg:left-[35%] overflow-scroll">
      <ul className="list-none px-3">{suggestionsList}</ul>
    </div>
  );
};

export default AutoComplete;
