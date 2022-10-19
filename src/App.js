import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogginInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLogginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(() => {
      return true;
    });
  };

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <MainHeader isLoggedIn={isLoggedIn} onLogout={onLogout} />
      {!isLoggedIn && <Login onLoginHandle={loginHandler} />}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
