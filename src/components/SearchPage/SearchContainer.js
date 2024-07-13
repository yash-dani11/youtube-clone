import React, { useCallback, useRef } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import searchVideos from "../../utils/searchVideos";
import { setSearchResults } from "../../redux/searchSlice";
import Shimmer from "./Shimmer";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
const SearchContainer = ({searchString}) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state) => state.search?.searchResults?.[searchString]
  );
  const searchRef = useRef();
  const token = useSelector(
    (state) => state.search?.searchResults?.[searchString]?.token
  );
  const storeSearchResults = useCallback(async () => {
    try {
      const data = await searchVideos(searchString, token);
      dispatch(setSearchResults({ id: searchString, ...data }));
    } catch (error) {
      console.log("An error occured.", error);
    }
  }, [searchString, token]);
  useInfiniteScroll(storeSearchResults, searchRef, searchResults);
  let searchList = Array(20)
    .fill(0)
    .map((_, index) => <Shimmer key={index}></Shimmer>);
  if (searchResults) {
    const resultList = Object.values(searchResults);
    searchList = resultList.map((result, index) => 
      <Card
        data={result}
        key={result?.id?.videoId}
        ref={index === resultList.length - 4 ? searchRef : null}
      ></Card>
    );
  }
  return <div className="pt-8">{searchList}</div>;
};

export default SearchContainer;
