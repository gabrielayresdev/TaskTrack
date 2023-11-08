import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const RequireAuth = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  if (!auth.user) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default RequireAuth;
