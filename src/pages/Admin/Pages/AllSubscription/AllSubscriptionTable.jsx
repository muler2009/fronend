import { Approval } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useApproveSubscriptionMutation,
  useGetAllSubscriptionQuery,
} from "../../../../api/apiSlice";
import Loading from "../../../public/components/Loading";
import GridData from "../../components/DataGrid/GridData";

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
    //   minWidth: 50,
    //   flex: 50,
    //   renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    // },
    {
      field: "studentName",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => params?.row?.student?.fullname,
    },
    {
      field: "department",
      headerName: "Department",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => params?.row?.student?.department,
    },
    {
      field: "requestedDate",
      headerName: "Requested Date",
      minWidth: 100,
      flex: 1,
      renderCell: (params) =>
        new Date(params?.row?.student?.created_at)?.toLocaleDateString("en-us"),
    },
    {
      field: "requestedTime",
      headerName: "Requested Time",
      minWidth: 100,
      flex: 1,
      renderCell: (params) =>
        new Date(params?.row?.student?.created_at)?.toLocaleTimeString("en-us"),
    },
    {
      field: "payment",
      headerName: "Status",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params?.row?.payment}
          color={params?.row?.payment === "Paid" ? "primary" : "secondary"}
        />
      ),
    },
    {
      field: "payee_code",
      headerName: "Pay Code",
      minWidth: 100,
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
      minWidth: 100,
      flex: 1.5,
      align: "left",
      renderCell: (params) => {
        return (
          <div className="flex">
            {params?.row?.payment === "Pending" && (
              <IconButton
                color="primary"
                onClick={() => {
                  setOpenApproval(true);
                  setSelectedId(params?.row?.id);
                }}
              >
                <Approval />
              </IconButton>
            )}
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
      .catch((err) => toast.error("Please try again"));
  };

  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState("Pending");
  useEffect(() => {
    assistData?.data &&
      setFiltered(
        assistData?.data?.filter((item) => item?.payment === "Pending")
      );
  }, [assistData]);

  if (errorAssist) return <Typography>{errorAssist?.data?.message}</Typography>;
  if (isAssistLoading) return <Loading />;

  return (
    <div className="">
      <div className="flex justify-end w-full place-items-center pb-3">
        {/* <PageTitle title="Decision" sx={{ fontSize: 22, mb: 0 }} /> */}
        <div className="flex gap-2">
          <FormControl sx={{ width: 300 }} required variant="outlined">
            <InputLabel id="jobPost">Show</InputLabel>
            <Select
              label="Show"
              value={show}
              defaultValue={"Pending"}
              onChange={(e) => {
                setShow(e.target.value);
                if (e.target.value === "All") setFiltered(assistData?.data);
                if (e.target.value === "Pending")
                  setFiltered(
                    assistData?.data?.filter(
                      (item) => item?.payment === "Pending"
                    )
                  );
                if (e.target.value === "Paid")
                  setFiltered(
                    assistData?.data?.filter((item) => item?.payment === "Paid")
                  );
              }}
            >
              {["All", "Pending", "Paid"]?.map((obj, index) => (
                <MenuItem key={index} value={obj}>
                  {obj}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="contained" onClick={() => setOpenApproval(true)}>
            Add
          </Button>
        </div>
      </div>

      <Paper sx={{ width: "100%" }}>
        <GridData rows={filtered} columns={columns} />
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
