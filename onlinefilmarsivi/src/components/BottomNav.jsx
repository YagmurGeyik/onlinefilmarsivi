import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import "../styles/BottomNav.css"; // CSS'i birazdan yazacağız

function BottomNav({ toggleFilter }) {
  return (
    <div className="bottom-nav d-md-none">
      <Link to="/" className="bottom-nav-item">
        <AiFillHome size={24} />
        <span>Anasayfa</span>
      </Link>

      <Link to="/favorites" className="bottom-nav-item">
        <AiOutlineHeart size={24} />
        <span>Favoriler</span>
      </Link>

      <button className="bottom-nav-item" onClick={toggleFilter}>
        <FiMenu size={24} />
        <span>Menü</span>
      </button>
    </div>
  );
}

export default BottomNav;
