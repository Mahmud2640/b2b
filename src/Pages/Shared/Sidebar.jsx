import React, { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

const Sidebar = () => {
   const [open, setOpen] = useState(false);
   const menus = [
      { name: "dashboard", link: "/", icon: MdOutlineDashboard },
      { name: "user", link: "/", icon: AiOutlineUser },
      { name: "messages", link: "/", icon: FiMessageSquare },
      { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
      { name: "File Manager", link: "/", icon: FiFolder },
      { name: "Cart", link: "/", icon: FiShoppingCart },
      { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
      { name: "Setting", link: "/", icon: RiSettings4Line },
    ];
   return (
      <div>
         
      </div>
   );
};

export default Sidebar;