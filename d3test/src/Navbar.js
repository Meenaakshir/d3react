import React from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FiPrinter } from "react-icons/fi";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">Diagonostic Tool</div>
    <div className="navbar__item">Logged in as General User</div>
    <div className="navbar__item">|</div>
    <div className="navbar__item">
      <FaAlignJustify />
    </div>
    <div className="navbar__item">
      <FiDownload />
    </div>
    <div className="navbar__item">
      <FiPrinter />
    </div>
    <div className="navbar__item">
      <HiQuestionMarkCircle />
    </div>
    <div className="navbar__item">
      <FaLongArrowAltRight />
    </div>
  </header>
);

export default Navbar;
