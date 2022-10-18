import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    console.log(email, password);
    setIsLoggedIn(() => {
      return true;
    });
  };
  return (
    <div className="App">
      <MainHeader isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Login onLoginHandle={loginHandler} />}
    </div>
  );
}

export default App;
