import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { login } from "../store/login";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label htmlFor="username" className={styles.label}>
        Usuário
      </label>
      <input
        type="text"
        className={styles.input}
        id="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <label htmlFor="password" className={styles.label}>
        Senha
      </label>
      <input
        type="password"
        className={styles.input}
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button className={styles.button}>Entrar</button>
    </form>
  );
};

export default Login;
