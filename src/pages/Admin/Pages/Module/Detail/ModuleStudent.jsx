import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { renderProgress } from "@mui/x-data-grid-generator";
import React from "react";
import { renderStatus } from "../../../components/DataGrid/renderStatus";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1,
    editable: true,
  },
  {
    field: "sex",
    headerName: "Sex",
    flex: 1,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    editable: false,
  },
  {
    field: "examDate",
    headerName: "Exam Date",
    sortable: true,
    flex: 1,
    editable: false,
    valueGetter: (params) =>
      `${new Date(params?.row?.examDate).toDateString()}`,
  },
  {
    field: "examTime",
    headerName: "Exam Time",
    flex: 1,
    editable: false,
    valueGetter: (params) =>
      `${new Date(params?.row?.examDate).toLocaleTimeString()}`,
  },
  {
    field: "result",
    headerName: "Result",
    flex: 1,
    editable: false,
    availableAggregationFunctions: (4)[("min", "max", "avg", "size")],
    renderCell: renderProgress,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Full Name",
    sex: "Male",
    result: 0.6,
    city: "Addis Ababa",
    examDate: "12/12/23",
  },
  {
    id: 2,
    fullName: "Full Name",
    sex: "Female",
    result: 0.78,
    city: "Bahir Dar",
    examDate: "12/12/23",
  },
  {
    id: 3,
    fullName: "Full Name",
    sex: "Female",
    result: 0.25,
    city: "Addis Ababa",
    examDate: "12/12/23",
  },
  {
    id: 4,
    fullName: "Full Name",
    sex: "Male",
    result: 0.41,
    city: "Hawassa",
    examDate: "12/12/23",
  },
  {
    id: 5,
    fullName: "Full Name",
    sex: "Female",
    result: 0.96,
    city: "Adama",
    examDate: "12/12/23",
  },
  {
    id: 6,
    fullName: "Full Name",
    sex: "Male",
    result: 0.77,
    city: "Adama",
    examDate: "12/12/23",
  },
  {
    id: 7,
    fullName: "Full Name",
    sex: "Male",
    result: 0.1,
    city: "Addis Ababa",
    examDate: "12/12/23",
  },
  {
    id: 8,
    fullName: "Full Name",
    sex: "Male",
    result: 0.33,
    city: "Dire Dawa",
    examDate: "12/12/23",
  },
  {
    id: 9,
    fullName: "Full Name",
    sex: "Male",
    result: 0.36,
    city: "Addis Ababa",
    examDate: "12/12/23",
  },
];

const ModuleStudent = () => {
  return (
    <React.Fragment>
      <section className="w-full">
        <div className="m-10">
          <div className="pb-10 text-center">
            <Typography variant="h6">Introduction to Programming</Typography>
            <Typography variant="body2">SWEng2324</Typography>
            <Typography variant="body2">Software Engineering</Typography>
          </div>
          <Box sx={{ width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection={false}
              disableRowSelectionOnClick
              autoHeight={true}
            />
          </Box>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModuleStudent;
