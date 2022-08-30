import React from "react";
import "./Navbar.css";
import { BiUserCircle, BiHomeHeart, BiImageAdd } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = (props) => {
  return (
    <div>
      <div className="navbar">
        <p>𝖇𝖆𝖟𝖎𝖓𝖌𝖆</p>

        <div className="inp">
          <input
            type="text"
            value={props.inp}
            placeholder="search photos"
            onChange={props.handleInp}
            onKeyDown={props.onKeyDown}
          />
          <button type="button" onClick={props.Search}>
           🔍
          </button>
          <div className="user mobuser">
            <BiHomeHeart />
            <BiImageAdd />

            <FiSend />

            <AiOutlineHeart />
            <BiUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
