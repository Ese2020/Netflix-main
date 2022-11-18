import React from "react";
import { FaSearch, FaDumbbell, FaCaretDown } from "react-icons/fa";

export const KidsNav = () => {
  return (
    <nav style={{display: "flex"}}>
         <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <span>Home</span>
                <span>Characters</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Languages</span>
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