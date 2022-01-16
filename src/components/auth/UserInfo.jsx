import { useAuth0 } from "@auth0/auth0-react";

function UserInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <></>;
  }

  return isAuthenticated && <div>Welcome {user.name}</div>;
}

export default UserInfo;
