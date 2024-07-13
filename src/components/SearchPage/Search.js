import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { viewSideBar, collapseSideBar } from "../../redux/sidebarSlice";

import SearchContainer from "./SearchContainer";
import { setSearchValue } from "../../redux/searchSlice";
const Search = () => {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get("search_query");
  const dispatch = useDispatch();
  dispatch(setSearchValue(searchString));
  const sidebarVisible = useSelector((state) => state.sidebar?.view);
  useEffect(() => {
    document.title = `${decodeURIComponent(searchString)} - Youtube`;
    dispatch(viewSideBar());
    return () => {
      dispatch(collapseSideBar());
    };
  }, [searchString]);
  const marginLeft = sidebarVisible ? "sm:ml-64" : "mx-6";
  return (
    <div className={marginLeft}>
      <SearchContainer searchString={searchString}></SearchContainer>
    </div>
  );
};

export default Search;
