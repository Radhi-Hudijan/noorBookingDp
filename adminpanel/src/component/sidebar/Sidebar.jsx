import React from "react";
import "./sidebar.scss";

// import icons from Material Ui
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">NoorBooking</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>

          <p className="title">LIST</p>
          <li>
            <PersonIcon className="icon" />
            <span> Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span> Products</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span> Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon" />
            <span> Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className="icon" />
            <span> Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodIcon className="icon" />
            <span> System Health</span>
          </li>
          <li>
            <HistoryIcon className="icon" />
            <span> Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span> Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsAccessibilityIcon className="icon" />
            <span> Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
