import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaDumbbell, FaCaretDown } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav style={{ display: "flex" }}>
      <div>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Link to="./homeadults">Home</Link>
          <Link to="./tvshowsadults">TV Shows</Link>
          <Link to="./moviesadults">Movies</Link>
          <Link to="./newandpopularadults">New & Popular</Link>
          <Link to="./mylistadults">My List</Link>
          <Link to="./browsebylanguagesadults">Browse by Languages</Link>
        </div>
        <div>
          <FaSearch />
          <FaDumbbell />
          <div>
            <img src="" alt="" />
            <FaCaretDown />
          </div>
        </div>
      </div>
    </nav>
  );
};
