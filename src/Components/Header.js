import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loading = token.loading || user.loading;
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        onClick={() => dispatch(userLogout())}
        className={`${styles.button} ${loading ? styles.loading : ""} ${
          user.data ? styles.loaded : ""
        }`}
      ></button>
    </div>
  );
};

export default Header;
