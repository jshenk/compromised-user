import React, { useState } from "react";
import "./App.css";
import { AuthenticatedDashboard } from "./components/AuthenticatedDashboard";
import { LoginForm } from "./components/LoginForm";
import { userData } from "./data/userData";

function App() {
  const [auth, setAuth] = useState(userData);
  const [login, setLogin] = useState(true);

  return (
    <div className="App max-w-2xl mx-auto">
      {login ? (
        <LoginForm setLogin={setLogin} setAuth={setAuth} />
      ) : (
        <AuthenticatedDashboard
          userData={auth}
          setAuth={setAuth}
          setLogin={setLogin}
        />
      )}
    </div>
  );
}

export default App;
