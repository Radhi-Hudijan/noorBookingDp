import React from "react";
import style from "./MailList.module.css";

const MailList = () => {
  return (
    <div className={style.mail}>
      <h1 className={style.mailTitle}>Save time, save money!</h1>
      <span className={style.mailDesc}>
        Sign up and we'll send the best deals to you
      </span>
      <div className={style.mailInputContainer}>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
