import React, { useEffect } from "react";
import MainContainer from "./MainContainer";

import { collapseSideBar, viewSideBar } from "../redux/sidebarSlice";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "YouTube";
    dispatch(viewSideBar());
    return () => {
      dispatch(collapseSideBar());
    };
  }, []);
  return <MainContainer></MainContainer>;
};

export default Homepage;
