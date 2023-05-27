import {
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
  useGridApiRef,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import React, { useState } from "react";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

export default function GridData({ rows, columns, ...rest }) {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        disableDensitySelector
        componentsProps={{
          filterPanel: {
            disableAddFilterButton: true,
            disableRemoveAllButton: true,
          },
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        slots={{ toolbar: QuickSearchToolbar }}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        rowsPerPageOptions={[5, 10, 25]}
        {...rest}
      />
    </Box>
  );
}
