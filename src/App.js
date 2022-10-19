import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(() => {
      return true;
    });
  };
  return (
    <div className="App">
      <MainHeader isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Login onLoginHandle={loginHandler} />}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
