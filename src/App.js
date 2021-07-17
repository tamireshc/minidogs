import React from "react";
import "./App.css";
import Content from "./Components/Header";
import Header from "./Components/Content";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
    console.log("disparou");
  }, [dispatch]);

  return (
    <div className="container">
      <Content />
      <Header />
    </div>
  );
}

export default App;
