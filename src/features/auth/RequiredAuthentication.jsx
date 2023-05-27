import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuthentication = () => {
  // const user = useSelector(currentUserToken);
  const { user } = useSelector((state) => state.auth);
  // console.log("protected route", user);

  const locate = useLocation();
  // console.log(user?.token);

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: locate }} replace />
  );
};

export default RequiredAuthentication;
