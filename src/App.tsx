import React, { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { UserDataResponse } from "./models/userDataResponse";

function App() {
  const [auth, setAuth] = useState<UserDataResponse | undefined>();
  const [currentPage, setCurrentPage] =
    useState<"login" | "dashboard">("login");

  return (
    <div className="App max-w-2xl mx-auto px-5">
      {currentPage === "login" && (
        <Login setCurrentPage={setCurrentPage} setAuth={setAuth} />
      )}
      {currentPage === "dashboard" && auth && (
        <Dashboard
          auth={auth}
          setAuth={setAuth}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
