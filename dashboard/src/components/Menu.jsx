import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Menu.css";
import GeneralContext from "./GeneralContext";
import ProfileModal from "./ProfileModal";

// Material UI Imports
import { Menu as MuiMenu, MenuItem, Avatar, ListItemIcon, Divider } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // 1. Get user from Context
  const { user } = useContext(GeneralContext);

  // Material UI Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    handleClose(); // Close the dropdown
    setIsProfileOpen(true); // Open the modal
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
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
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* --- PROFILE SECTION WITH MATERIAL UI --- */}
        <div 
          className="profile" 
          onClick={handleClick} 
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Avatar sx={{ width: 30, height: 30, bgcolor: "#e0e0e0", color: "#387ed1", fontSize: "0.9rem", fontWeight: "bold" }}>
             {initials}
          </Avatar>
          <p className="username" style={{ margin: 0 }}>{displayUsername}</p>
        </div>

        {/* THE DROPDOWN MENU */}
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
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {/* Option 1: Profile */}
          <MenuItem onClick={handleOpenProfile}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>          

          {/* Option 2: Logout */}
          <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
            <ListItemIcon>
              <Logout fontSize="small" color="error" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </MuiMenu>
        
        {/* MODAL COMPONENT */}
        <ProfileModal 
          open={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
          user={user} 
        />
        
      </div>
    </div>
  );
};

export default Menu;