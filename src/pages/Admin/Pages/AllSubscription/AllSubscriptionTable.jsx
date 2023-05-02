import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useAddAssistAdminMutation,
  useApproveSubscriptionMutation,
  useGetAllSubscriptionQuery,
} from "../../../../api/apiSlice";
import Loading from "../../../public/components/Loading";
import GridData from "../../components/DataGrid/GridData";
import { Approval } from "@mui/icons-material";

const AllSubscriptionTable = () => {
  const {
    data: assistData,
    isLoading: isAssistLoading,
    error: errorAssist,
  } = useGetAllSubscriptionQuery();

  const [approveSubscription, { isLoading: isApproveSubscriptionLoading }] =
    useApproveSubscriptionMutation();

  const [openApproval, setOpenApproval] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const columns = [
    // {
    //   field: "id",
    //   headerName: "No.",
    //   filterable: false,
    //   renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    // },
    {
      field: "studentName",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => params?.row?.student?.fullname,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      renderCell: (params) => params?.row?.student?.department,
    },
    {
      field: "requestedDate",
      headerName: "Requested Date",
      flex: 1,
      renderCell: (params) =>
        new Date(params?.row?.student?.created_at)?.toLocaleDateString("en-us"),
    },
    {
      field: "requestedTime",
      headerName: "Requested Time",
      flex: 1,
      renderCell: (params) =>
        new Date(params?.row?.student?.created_at)?.toLocaleTimeString("en-us"),
    },
    {
      field: "payment",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "payee_code",
      headerName: "Pay Code",
      flex: 1,
    },
    // {
    //   field: "activated_by",
    //   headerName: "Activated By",
    //   flex: 1,
    // },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 1.5,
      align: "left",
      renderCell: (params) => {
        return (
          <div className="flex">
            <IconButton
              color="primary"
              onClick={() => {
                setOpenApproval(true);
                setSelectedId(params?.row?.id);
              }}
            >
              <Approval />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const onAddSubmitClick = async (e) => {
    e.preventDefault();

    await approveSubscription({ subscription_id: selectedId })
      .then((res) => {
        if (res.error) {
          toast.error(res.error.data.title || res.error.data.message);
        } else {
          toast.success("Successfully Added");
          setSelectedId(-1);
          setOpenApproval(false);
        }
      })
      .catch((err) => toast.error("Data is not saved"));
  };

  if (errorAssist) return <Typography>{errorAssist?.data?.message}</Typography>;
  if (isAssistLoading) return <Loading />;

  return (
    <div className="">
      <div className="flex justify-end w-full place-items-center pb-3">
        {/* <PageTitle title="Decision" sx={{ fontSize: 22, mb: 0 }} /> */}
        <div className="flex gap-2">
          <Button variant="contained" onClick={() => setOpenApproval(true)}>
            Add
          </Button>
        </div>
      </div>

      <Paper sx={{ width: "100%" }}>
        <GridData rows={assistData?.data} columns={columns} />
      </Paper>

      <Dialog
        maxWidth="sm"
        fullWidth
        open={openApproval}
        onClose={() => setOpenApproval(false)}
      >
        <DialogTitle>Approve</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12}>
              <form onSubmit={onAddSubmitClick}>
                <Stack spacing={3}>
                  <Typography>Are you sure do you want to approve?</Typography>

                  <div className="flex gap-2 justify-end pt-3">
                    <LoadingButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      loading={isApproveSubscriptionLoading}
                      startIcon={<AddIcon />}
                    >
                      Approve
                    </LoadingButton>
                    <Button
                      variant="contained"
                      startIcon={<CloseIcon />}
                      onClick={() => setOpenApproval(false)}
                    >
                      Close
                    </Button>
                  </div>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllSubscriptionTable;
