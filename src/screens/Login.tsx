import React, { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    try {
      loginWithRedirect();
      navigate("/home");
    } catch (error) {
      alert("Error occur 😞");
    }
  }, [loginWithRedirect, navigate]);

  return (
    <div className="flex justify-center my-10">
      <button
        className="px-3 py-2 rado bg-cyan-300 rounded-[10px]"
        onClick={handleLogin}
      >
        <p>Login</p>
      </button>
    </div>
  );
};

export default Login;
