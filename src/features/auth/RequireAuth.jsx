import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUserToken } from "./authSlice";

const RequireAuth = () => {

    const token = useSelector(currentUserToken)
    const location = useLocation()

    return(
        token
            ? <Outlet />
            : <Navigate to='/login' state={{from: location}} replace />
    )
}

export default RequireAuth;