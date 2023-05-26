import { Box, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { renderProgress } from "@mui/x-data-grid-generator";
import React, { useState } from "react";
import { renderStatus } from "../../../components/DataGrid/renderStatus";
import AdminTopbar from "../../../components/AdminTopbar";
import AdminSidebar from "../../../components/AdminSideBar";
import { Outlet } from "react-router-dom";
import ModuleInfo from "./ModuleInfo";
import ModuleStudent from "./ModuleStudent";
import ModuleReport from "./ModuleReport";

const renderDetailsButton = (params) => {
  return (
    <div className="flex gap-0">
      <IconButton>
        <InfoIcon
          variant="contained"
          color="primary"
          size="small"
          onClick={() => // console.log(params)}
        />
      </IconButton>
      <IconButton>
        <EditIcon
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => // console.log(params)}
        />
      </IconButton>
      <IconButton>
        <DeleteIcon
          variant="contained"
          color="error"
          size="small"
          onClick={() => // console.log(params)}
        />
      </IconButton>
    </div>
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
    editable: true,
  },
  {
    field: "moduleName",
    headerName: "Module Name",
    flex: 1,
    editable: true,
  },
  {
    field: "uploadedBy",
    headerName: "Uploaded By",
    flex: 1,
    editable: true,
  },
  {
    field: "studentCount",
    headerName: "Student Count",
    // type: "number",
    flex: 1,
    editable: true,
    // align: "center",
  },
  {
    field: "averageResult",
    headerName: "Average Result",
    flex: 1,
    editable: false,
    availableAggregationFunctions: (4)[("min", "max", "avg", "size")],
    renderCell: renderProgress,
  },
  {
    field: "remark",
    headerName: "Remark",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    resizable: true,
    flex: 2.5,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: true,
    flex: 1,
    renderCell: renderStatus,
  },
  {
    field: "uploadedAt",
    headerName: "Uploaded Date",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${new Date(params?.row?.uploadedAt).toDateString()}`,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    flex: 1,
    align: "center",
    renderCell: renderDetailsButton,
  },
];

const rows = [
  {
    id: 1,
    uploadedBy: "Jon",
    department: "Software Engineering",
    moduleName: "Introduction to Programming",
    averageResult: 0.6,
    studentCount: 35,
    remark: "This column has a value getter and is not sortable",
    status: "Requested",
    uploadedAt: "12/12/23",
  },
  {
    id: 2,
    uploadedBy: "Lannister",
    department: "Software Engineering",
    moduleName: "Database Management System",
    averageResult: 0.78,
    studentCount: 42,
    remark: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",
  },
  {
    id: 3,
    uploadedBy: "Lannister",
    department: "Software Engineering",
    moduleName: "Advanced Programming",
    averageResult: 0.25,
    studentCount: 45,
    remark: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",
  },
  {
    id: 4,
    uploadedBy: "Stark",
    department: "Software Engineering",
    moduleName: "Arya",
    averageResult: 0.41,
    studentCount: 16,
    remark: "This column has a value getter and is not sortable",
    status: "Requested",
    uploadedAt: "12/12/23",
  },
  {
    id: 5,
    uploadedBy: "Targaryen",
    department: "Software Engineering",
    moduleName: "Daenerys",
    averageResult: 0.96,
    studentCount: null,
    remark: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",
  },
  {
    id: 6,
    uploadedBy: "Melisandre",
    department: "Software Engineering",
    moduleName: null,
    averageResult: 0.77,
    studentCount: 150,
    remark: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",
  },
  {
    id: 7,
    uploadedBy: "Clifford",
    department: "Software Engineering",
    moduleName: "Ferrara",
    averageResult: 0.1,
    studentCount: 44,
    remark: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",
  },
  {
    id: 8,
    uploadedBy: "Frances",
    department: "Software Engineering",
    moduleName: "Rossini",
    averageResult: 0.33,
    studentCount: 36,
    remark: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",
  },
  {
    id: 9,
    uploadedBy: "Roxie",
    department: "Software Engineering",
    moduleName: "Harvey",
    averageResult: 0.36,
    studentCount: 65,
    remark: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",
  },
];

const ModuleDetail = () => {
  const [renderPage, setRenderPage] = useState("info");
  return (
    <React.Fragment>
      <section className="w-full flex flex-row">
        {/* Collapsable Sidebar for Admin page */}
        <AdminSidebar />
        <div className={`flex-1 flex-col`}>
          <AdminTopbar />
          <Outlet />

          <div className="flex mt-8 border-b pb-1 border-gray-200">
            <div
              className="text-center px-4 pt-1 cursor-pointer border-r border-gray-200"
              onClick={() => setRenderPage("info")}
            >
              Info
            </div>
            <div
              className="text-center px-4 py-1 cursor-pointer border-r border-gray-200"
              onClick={() => setRenderPage("student")}
            >
              Student
            </div>
            <div
              className="text-center px-4 py-1 cursor-pointer border-r border-gray-200"
              onClick={() => setRenderPage("report")}
            >
              Report
            </div>
          </div>

          <div className="w-full">
            {renderPage === "info" && <ModuleInfo />}
          </div>
          <div className="w-full">
            {renderPage === "student" && <ModuleStudent />}
          </div>
          <div className="w-full">
            {renderPage === "report" && <ModuleReport />}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModuleDetail;
