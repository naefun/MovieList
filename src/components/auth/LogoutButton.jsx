import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="rounded-lg hover:bg-gray-700/40 px-5 py-2"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    )
  );
}

export default LogoutButton;
