import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./screens/Dashboard";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Product from "./screens/Product";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const DOMAIN_URL = process.env.REACT_APP_DOMAIN_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

if (typeof DOMAIN_URL === "undefined") {
  throw new Error(
    `REACT_APP_DOMAIN_URL must be a defined environment variable`
  );
}
if (typeof CLIENT_ID === "undefined") {
  throw new Error(`CLIENT_ID must be a defined environment variable`);
}

root.render(
  <Auth0Provider
    domain={DOMAIN_URL}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
