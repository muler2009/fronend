import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
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
import React from "react";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import GridData from "../../components/DataGrid/GridData";
import { useState } from "react";
import Loading from "../../../public/components/Loading";
import {
  useAddAssistAdminMutation,
  useGetAssistAdminQuery,
} from "../../../../api/apiSlice";

const AssistTable = () => {
  const {
    data: assistData,
    isLoading: isAssistLoading,
    error: errorAssist,
  } = useGetAssistAdminQuery();

  const [addAssistAdmin, { isLoading: iaAddAssistAdminLoading }] =
    useAddAssistAdminMutation();

  const [openAdd, setOpenAdd] = useState(false);

  const columns = [
    // {
    //   field: "id",
    //   headerName: "No.",
    //   filterable: false,
    //   renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      valueGetter: (params) =>
        new Date(params?.value)?.toLocaleDateString("en-us"),
    },
    {
      field: "email_verified_at",
      headerName: "Email Verified At",
      flex: 1,
      valueGetter: (params) =>
        new Date(params?.value)?.toLocaleDateString("en-us"),
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   sortable: false,
    //   flex: 1.5,
    //   align: "left",
    //   renderCell: (params) => {
    //     return (
    //       <div className="flex">
    //         {/* <IconButton
    //           color="primary"
    //           onClick={() => {
    //             setSelectedId(params?.row?.id);
    //             setName(params?.row?.name);
    //             setValueFrom(params?.row?.valueFrom);
    //             setValueTo(params?.row?.valueTo);
    //             setOpenUpdate(true);
    //           }}
    //         >
    //           <EditIcon />
    //         </IconButton>
    //         <DeleteDialog
    //           api={useDeleteDecisionSettingMutation}
    //           dialogLabel="Delete Decision"
    //           id={params?.row?.id}
    //           name={params?.row?.name}
    //         /> */}
    //       </div>
    //     );
    //   },
    // },
  ];

  const [addFormState, setAddFormState] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleAddChange = (e) => {
    e.persist();
    setAddFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddSubmitClick = async (e) => {
    e.preventDefault();

    await addAssistAdmin(addFormState)
      .then((res) => {
        if (res.error) {
          toast.error(res.error.data.title || res.error.data.message);
        } else {
          toast.success("Successfully Added");
          setAddFormState({
            name: "",
            phone: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
          setOpenAdd(false);
        }
      })
      .catch((err) => toast.error("Please try again"));
  };

  if (errorAssist) return <Typography>{errorAssist?.data?.message}</Typography>;
  if (isAssistLoading) return <Loading />;

  return (
    <div className="">
      <div className="flex justify-end w-full place-items-center pb-3">
        {/* <PageTitle title="Decision" sx={{ fontSize: 22, mb: 0 }} /> */}
        <div className="flex gap-2">
          <Button variant="contained" onClick={() => setOpenAdd(true)}>
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
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <DialogTitle>Add Assist Admin</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12}>
              <form onSubmit={onAddSubmitClick}>
                <Stack spacing={3}>
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={addFormState.name}
                    onChange={handleAddChange}
                  />
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    type="phone"
                    value={addFormState.phone}
                    onChange={handleAddChange}
                  />
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={addFormState.email}
                    onChange={handleAddChange}
                  />
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={addFormState.password}
                    onChange={handleAddChange}
                  />
                  <TextField
                    variant="filled"
                    required
                    fullWidth
                    label="Confirm Password"
                    name="password_confirmation"
                    type="password"
                    value={addFormState.password_confirmation}
                    onChange={handleAddChange}
                  />

                  <div className="flex gap-2 justify-end pt-3">
                    <LoadingButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      loading={iaAddAssistAdminLoading}
                      startIcon={<AddIcon />}
                    >
                      Add
                    </LoadingButton>
                    <Button
                      variant="contained"
                      startIcon={<CloseIcon />}
                      onClick={() => setOpenAdd(false)}
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

export default AssistTable;
