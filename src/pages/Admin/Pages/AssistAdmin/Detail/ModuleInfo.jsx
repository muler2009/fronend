import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StatusComponent from "../../../components/StatusComponent";

const modules = [
  {
    id: 1,
    uploadedBy: "Jon",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Introduction to Programming",
    averageResult: 0.6,
    studentCount: 35,
    description: "This column has a value getter and is not sortable",
    status: "Requested",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 2,
    uploadedBy: "Lannister",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Database Management System",
    averageResult: 0.78,
    studentCount: 42,
    description: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 3,
    uploadedBy: "Lannister",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Advanced Programming",
    averageResult: 0.25,
    studentCount: 45,
    description: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 4,
    uploadedBy: "Stark",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Arya",
    averageResult: 0.41,
    studentCount: 16,
    description: "This column has a value getter and is not sortable",
    status: "Requested",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 5,
    uploadedBy: "Targaryen",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Daenerys",
    averageResult: 0.96,
    studentCount: null,
    description: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 6,
    uploadedBy: "Melisandre",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: null,
    averageResult: 0.77,
    studentCount: 150,
    description: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 7,
    uploadedBy: "Clifford",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Ferrara",
    averageResult: 0.1,
    studentCount: 44,
    description: "This column has a value getter and is not sortable",
    status: "Approved",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 8,
    uploadedBy: "Frances",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Rossini",
    averageResult: 0.33,
    studentCount: 36,
    description: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",

    dailyRate: 0,
  },
  {
    id: 9,
    uploadedBy: "Roxie",
    courseCode: "SWEng2324",
    department: "Software Engineering",
    moduleName: "Harvey",
    averageResult: 0.36,
    studentCount: 65,
    description: "This column has a value getter and is not sortable",
    status: "Rejected",
    uploadedAt: "12/12/23",

    featureImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkccte.pittstate.edu%2Fworkshop%2Fintroduction-to-programming-for-educators-instructional-video-series%2F&psig=AOvVaw0z4VROH_cXARUOX6YeN15r&ust=1678276560128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOvMPhyf0CFQAAAAAdAAAAABAE",
    dailyRate: 0,
  },
];

const ModuleInfo = () => {
  var params = useParams();
  const filtered = modules?.find((obj) => obj?.id == params?.id);
  const [openStatusDialog, setOpenStatusDialog] = useState(false);

  return (
    <React.Fragment>
      <section className="w-full">
        <div className="m-10">
          <div className="flex gap-8 ">
            <div className="flex flex-1 justify-between">
              <div>
                <Typography variant="h6">{filtered?.moduleName}</Typography>
                <Typography variant="body2">{filtered?.courseCode}</Typography>
                <Typography variant="body2">{filtered?.department}</Typography>
                <Typography variant="body2" gutterBottom className="pt-5">
                  Lorem ipsum dolor sit amet. At dolorum porro ut modi officia
                  quo fugiat ducimus ut minima voluptatibus aut laboriosam
                  ratione est itaque magni? 33 ipsam quod sit nobis nisi est
                  suscipit praesentium aut odit sunt sed culpa illo id facilis
                  quis eos assumenda sequi.
                </Typography>
                <Typography variant="body2">
                  Eum inventore sunt aut illum libero et commodi odit non cumque
                  voluptas non enim doloribus et excepturi adipisci! Sed
                  aspernatur assumenda eum deleniti dolorem aut itaque fuga et
                  quaerat cupiditate qui asperiores velit. Et officiis
                  consectetur 33 quia ducimus nam blanditiis perferendis ex
                  autem maiores. Vel earum deserunt qui obcaecati sunt eos
                  reiciendis explicabo quo dicta blanditiis.
                </Typography>

                <div className="mt-10 flex flex-col flex-2 shadow-md  rounded">
                  <Typography variant="body2" className="pt-4 pl-5">
                    Admin Review
                  </Typography>
                  <hr />
                  <Typography variant="body2" className="px-5 pt-5">
                    Eum inventore sunt aut illum libero et commodi odit non
                    cumque voluptas non enim doloribus et excepturi adipisci!
                    Sed aspernatur assumenda eum deleniti dolorem aut itaque
                    fuga et quaerat cupiditate qui asperiores velit. Et officiis
                    consectetur 33 quia ducimus nam blanditiis perferendis ex
                    autem maiores. Vel earum deserunt qui obcaecati sunt eos
                    reiciendis explicabo quo dicta blanditiis.
                  </Typography>
                </div>
              </div>
              <Stack className="text-center pt-2">
                <StatusComponent
                  status={filtered?.status}
                  onClick={() => setOpenStatusDialog(!openStatusDialog)}
                />

                <Typography variant="body2" className="pt-1">
                  {filtered?.uploadedAt}
                </Typography>
              </Stack>
            </div>
            <div className="flex flex-col flex-2 text-center shadow-md	px-20 py-4 rounded h-fit">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
                className="place-self-center"
              />
              <Typography variant="h6" className="pt-4">
                John Doe
              </Typography>
              <Typography variant="body2" className="pb-3">
                +2519122356
              </Typography>
              <Typography variant="body2">Addis Ababa University</Typography>
              <hr className="mt-6 " />
              <Typography variant="body2" className="pt-3">
                3 Modules
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        maxWidth="sm"
        fullWidth
        open={openStatusDialog}
        onClose={() => setOpenStatusDialog(false)}
      >
        <DialogTitle>Change Status</DialogTitle>
        <DialogContent>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12}>
              <Stack spacing={3}>
                <FormControl fullWidth>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    label="status"
                    // value={status}
                    // onChange={(val) => {}}
                  >
                    {["Approved", "Rejected"].map((option) => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label={"Remark"}
                  type={"text"}
                  multiline={true}
                  minRows={5}
                  SelectProps={{ native: true }}
                  variant="outlined"
                  // value={remark}
                  // onChange={(e) => setDescription(e.target.value)}
                ></TextField>
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="outlined"
                    // startIcon={<SaveIcon />}
                    // onClick={onSubmitClick}
                    sx={{ mt: 2 }}
                  >
                    Change
                  </Button>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ModuleInfo;
