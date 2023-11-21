import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from "./Login.module.css";

const Login = () => {
  const [credential, setCredential] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // to het the values of the inputs together
  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {

    // to prevent page refresh
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("api/auth/login", credential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.lContainer}>
        <input
          type="text"
          className={style.lInput}
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          className={style.lInput}
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          className={style.lButton}
          disabled={loading}
          onClick={handleClick}
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
