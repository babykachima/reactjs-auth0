import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./screens/Dashboard";

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-10">
        <p>Loading....</p>
      </div>
    );
  }
  return (
    <div className="App max-w-[1440px] h-full mx-auto">
      <Navbar />
      {isAuthenticated ? <Dashboard /> : <HomePage />}
    </div>
  );
};

export default App;
