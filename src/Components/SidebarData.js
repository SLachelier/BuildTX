
import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiICons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Search By CSJ",
    path: "/fetchJobs",
    icon: <GiICons.GiArchiveResearch />,
    cName: "nav-text",
  },
  {
    title: "Search By District",
    path: "/fetchDistrict",
    icon: <GiICons.GiArchiveResearch />,
    cName: "nav-text",
  },
  {
    title: "Search By County",
    path: "/fetchCounty",
    icon: <GiICons.GiArchiveResearch />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export default SidebarData

