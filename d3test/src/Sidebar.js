import React, { useState } from "react";

import { Sidebardata } from "./Sidebardata";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="side-menu">
          <p style={{ marginLeft: "30rem" }}>PERFORMANCE MANAGEMENT</p>
          <br />

          {/* <FilterOptions /> */}

          <br />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {<li className="navbar-toggle"></li>}
            {Sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.icon}
                  <br />

                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
