import React from 'react';
import { FaCaretDown, FaPlayCircle, FaPlusCircle, FaRegThumbsUp, FaChevronCircleDown } from 'react-icons/fa';
import "./home.css";

function Card(props) {
    return(
        <div>
            <div>
                <div className='card'>
                    <a href={props.link} target="_blank">
                    <img src={props.imgs} alt="test"></img>
                    </a>
                    <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <FaPlayCircle />
                      <FaPlusCircle />
                      <FaRegThumbsUp />
                    </span>
                    <div style={{ fontSize: "1.5rem" }}>
                      <FaChevronCircleDown />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Card;