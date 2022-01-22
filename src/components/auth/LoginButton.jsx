import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="rounded-lg bg-orange-700 hover:bg-orange-700/40 px-5 py-2"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    )
  );
}

export default LoginButton;
