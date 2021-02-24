import React from "react";

import { FaShapes } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

import { AiFillPushpin } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";

import { AiOutlineMail } from "react-icons/ai";
export const Sidebardata = [
  {
    path: "/",
    icon: <AiFillPushpin />,
    cName: "nav-text",
  },
  {
    path: "/reports",
    icon: <BsBarChartFill />,
    cName: "nav-text",
  },
  {
    path: "/products",
    icon: <AiOutlineMail />,
    cName: "nav-text",
  },
  {
    path: "/team",
    icon: <FaShapes />,
    cName: "nav-text",
  },
  {
    path: "/messages",
    icon: <FiRefreshCcw />,
    cName: "nav-text",
  },
];
