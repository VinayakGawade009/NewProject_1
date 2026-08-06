import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom"; 
import axios from "axios";
import "./Menu.css";
import GeneralContext from "./GeneralContext";
import ProfileModal from "./ProfileModal";

import { Menu as MuiMenu, MenuItem, Avatar, ListItemIcon } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const { user } = useContext(GeneralContext);
  const location = useLocation(); 
  const currentPath = location.pathname;

  // Material UI Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleOpenProfile = () => {
    handleClose(); 
    setIsProfileOpen(true); 
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/auth/logout",
        {},
        { withCredentials: true }
      );
      handleClose();
      setTimeout(() => {
        window.location.href = "http://localhost:5174";
      }, 500);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  
  // Helper for initials
  const initials = user && user.username ? user.username.charAt(0).toUpperCase() : "U";
  const displayUsername = user ? user.username : "User";

  return (
    <div className="menu-container">
      {/* 1. Logo (Will sit top-left on mobile) */}
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" className="logo-img" />

      {/* 2. Menus (Will sit on the second row on mobile) */}
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={currentPath === "/" ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={currentPath === "/orders" ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={currentPath === "/holdings" ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={currentPath === "/positions" ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={currentPath === "/funds" ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={currentPath === "/apps" ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr className="desktop-divider" />
      </div>

      {/* 3. Profile (Moved OUTSIDE of the menus div, will sit top-right on mobile) */}
      <div className="profile" onClick={handleClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar sx={{ width: 30, height: 30, bgcolor: "#e0e0e0", color: "#387ed1", fontSize: "0.9rem", fontWeight: "bold" }}>
            {initials}
        </Avatar>
        <p className="username" style={{ margin: 0 }}>{displayUsername}</p>
      </div>

      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1 },
            '&:before': {
              content: '""', display: 'block', position: 'absolute', top: 0,
              right: 14, width: 10, height: 10, bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleOpenProfile}>
          <ListItemIcon><Person fontSize="small" /></ListItemIcon>
          Profile
        </MenuItem>          
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <ListItemIcon><Logout fontSize="small" color="error" /></ListItemIcon>
          Logout
        </MenuItem>
      </MuiMenu>
      
      <ProfileModal open={isProfileOpen} onClose={() => setIsProfileOpen(false)} user={user} />
    </div>
  );
};

export default Menu;