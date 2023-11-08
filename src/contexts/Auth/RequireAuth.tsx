import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const RequireAuth = ({ children }: React.PropsWithChildren) => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  // Will navigate to login since auth.user is always null when page is rendered, but login will send back to home as soon as token is validated
  React.useEffect(() => {
    if (!auth.user) navigate("/login");
  }, [auth.user, navigate]);

  return <>{children}</>;
};

export default RequireAuth;
