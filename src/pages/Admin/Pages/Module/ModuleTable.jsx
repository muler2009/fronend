import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { renderProgress } from "@mui/x-data-grid-generator";
import React from "react";
import { useNavigate } from "react-router-dom";
import { renderStatus } from "../../components/DataGrid/renderStatus";

const rows = [
  {
    id: 1,
    uploadedBy: "Jon",
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
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
    courseCode: "SWEng2423",
    department: "Software Engineering",
    moduleName: "Harvey",
    averageResult: 0.36,
    studentCount: 65,
    remark: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",
  },
];

const ModuleTable = () => {
  const navigate = useNavigate();

  const renderDetailsButton = (params) => {
    return (
      <div className="flex gap-0">
        <IconButton>
          <InfoIcon
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate(`./${params?.row?.id}`)}
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
      flex: 1.5,
      editable: false,
    },
    {
      field: "moduleName",
      headerName: "Module Name",
      flex: 1.5,
      editable: false,
    },
    {
      field: "courseCode",
      headerName: "Course Code",
      flex: 1,
      editable: false,
    },
    {
      field: "uploadedBy",
      headerName: "Uploaded By",
      flex: 1,
      editable: false,
    },
    {
      field: "studentCount",
      headerName: "Student Count",
      // type: "number",
      flex: 1,
      editable: false,
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
      align: "left",
      renderCell: renderDetailsButton,
    },
  ];

  return (
    <React.Fragment>
      <section className="w-full flex flex-row">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </section>
    </React.Fragment>
  );
};

export default ModuleTable;
