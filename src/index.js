import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../src/assets/css/index.css";
import RequiredAuthentication from "./features/auth/RequiredAuthentication";
import Layout from "./layout/Layout";
import { StudentDashboardStructure } from "./layout/StudentDashboardStructure";
import UploaderStructure from "./layout/UploaderStructure";
import AssistAdmin from "./pages/Admin/Pages/AssistAdmin/AssistAdmin";
import ModuleAdmin from "./pages/Admin/Pages/Module/ModuleAdmin";
import EmailVerification from "./pages/public/EmailVerification";
import Public from "./pages/public/Public";
import store from "./store/store";
import AllSubscription from "./pages/Admin/Pages/AllSubscription/AllSubscription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {/* Public Route */}

      <Route path="/*" element={<Public />} />
      <Route path="/verify/:token" element={<EmailVerification />} />
      {/* <Route path="student/*" element={<StudentDashboardStructure />} /> */}

      {/* Protected routes */}
      <Route element={<RequiredAuthentication />}>
        <Route path="student/*" element={<StudentDashboardStructure />} />
        <Route path="upload/*" element={<UploaderStructure />} />

        <Route path="admin/*" element={<ModuleAdmin />} />
        <Route path="admin/assist" element={<AssistAdmin />} />
        <Route path="admin/subscription" element={<AllSubscription />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
);
