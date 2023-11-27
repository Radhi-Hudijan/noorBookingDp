import React, { useContext } from "react";
import "./sidebar.scss";

//import link from react router
import { Link } from "react-router-dom";

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
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const {dispatch}= useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{'textDecoration':'none'}}>
          <span className="logo">NoorBooking</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div className='item'>
             <p className="title">MAIN</p>
             <Link to='/' style={{ 'textDecoration': 'none' }}>
               <li>
                 <DashboardIcon className="icon" />
                 <span> Dashboard</span>
               </li>
             </Link>
          </div>

          <div className='item'>
               <p className="title">LIST</p>
               <Link to='/users' style={{ 'textDecoration': 'none' }}>
                  <li>
                    <PersonIcon className="icon" />
                    <span> Users</span>
                  </li>
               </Link>
     
               <Link to='/hotels' style={{ 'textDecoration': 'none' }}>
                  <li>
                    <ProductionQuantityLimitsIcon className="icon" />
                    <span> Hotels</span>
                  </li>
            </Link>
            
            <Link to='/rooms' style={{ 'textDecoration': 'none' }}>
               <li>
                 <LocalShippingIcon className="icon" />
                 <span> Rooms</span>
               </li>
            </Link>
          </div>

          <div className='item'>
               <p className="title">USEFUL</p>
               <li>
                 <AssessmentIcon className="icon" />
                 <span> Stats</span>
               </li>
               <li>
                 <CircleNotificationsIcon className="icon" />
                 <span> Notification</span>
               </li>
          </div>

          <div className='item'>
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
          </div>

          <div className='item'>
              <p className="title">USER</p>
              <li>
                <SettingsAccessibilityIcon className="icon" />
                <span> Profile</span>
              </li>
              <li>
                <LogoutIcon className="icon" />
                <span> Logout</span>
              </li>
           </div>
                    
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => { dispatch({type:"LIGHT"})}}></div>
        <div className="colorOption" onClick={() => { dispatch({type:"DARK"})}}></div>
      </div>
    </div>
  );
};

export default Sidebar;
