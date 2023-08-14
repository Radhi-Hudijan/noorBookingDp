import React, { useContext } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={style.navBar}>
      <div className={style.navContainer}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={style.logo}>NoorBooking</span>{" "}
        </Link>
        {user ? (
          user.username
        ) : (
          <div className={style.navItems}>
            <button className={style.navButton}>Register</button>
            <Link to="/login">
              <button className={style.navButton}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
