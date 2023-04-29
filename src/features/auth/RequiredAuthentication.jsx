import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUserToken } from "../auth/authSlice";

const RequiredAuthentication = () => {
  // const user = useSelector(currentUserToken);
  const { isSuccess, isError, errorMsg, user } = useSelector(
    (state) => state.auth
  );
  // console.log("protected route", user);

  const locate = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: locate }} replace />
  );
};

export default RequiredAuthentication;
