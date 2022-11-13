import React, { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const { logout } = useAuth0();
  const handleLogOut = useCallback(() => {
    logout({ returnTo: window.location.origin });
    alert("logout successful 🎊");
  }, [logout]);

  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-col justify-between gap-4">
        <h3>🎊 welcome my dashboard!</h3>
        <button
          className="px-3 py-2 rado bg-cyan-300 rounded-[10px]"
          onClick={handleLogOut}
        >
          <p>logout 🥲</p>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
