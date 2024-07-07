import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarVisible = useSelector((store) => store?.sidebar?.view);

  return (
    <>
      {sidebarVisible && (
        <div className="hidden sm:block p-5 shadow-lg w-60 h-screen fixed">
            <div>
            <ul>
              <li>Home</li>
              <li>Videos</li>
              <li>Shorts</li>
              <li>Live</li>
            </ul>
          </div>
          <div className="pt-5">
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
            </ul>
          </div>
          <div className="pt-5">
            <h1 className="font-bold">Watch Later</h1>
            <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
            </ul>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Sidebar;
