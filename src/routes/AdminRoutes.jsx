import { useRoutes } from "react-router-dom"
import AdminHome from "../pages/Admin/layout/AdminHome";

const AdminRoutes = () => {

    let admin_route = useRoutes([
        {
            path: "/*",
            element : <AdminHome />,
            children: [
                {
                    path: 'test', 
                    element: <h1>Justt testing the outlet</h1>
                }
            ]
        }
    ])

    return admin_route;
}

export default AdminRoutes