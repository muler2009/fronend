import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuthentication = () => {
  const { user } = useSelector((state) => state.auth);

  const locate = useLocation();

  return user?.token ? (
    user?.token &&
    (user?.data?.user?.role === "admin" ||
      user?.data?.user?.role === "assist-admin") ? (
      <Navigate to="/my-admin" state={{ from: locate }} replace />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to="/login" state={{ from: locate }} replace />
  );
};

export default RequiredAuthentication;
