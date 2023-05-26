import { RiAdminFill } from "react-icons/ri";
import {
  MdOutlineAssignmentLate,
  MdOutlineCloudUpload,
  MdOutlineViewModule,
} from "react-icons/md";
import { IoSettings } from "react-icons/io5";

export const sidebar_link = [
  {
    path: "module",
    label: "Module",
    icon: <MdOutlineViewModule />,
  },
  {
    path: "studentadmin",
    label: "Student",
    icon: <RiAdminFill />,
  },
  {
    path: "/my-admin/assist",
    label: "Assist Admin",
    icon: <RiAdminFill />,
  },
  {
    path: "/my-admin/subscription",
    label: "Subscription",
    icon: <RiAdminFill />,
  },
  {
    path: "uploader",
    label: "Uploader",
    icon: <MdOutlineCloudUpload />,
  },
  {
    path: "assign-module",
    label: "Assign modules",
    icon: <MdOutlineAssignmentLate />,
  },
  {
    path: "setting",
    label: "Setting",
    icon: <IoSettings />,
  },
];
