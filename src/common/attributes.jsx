import * as fi from "react-icons/fi";
import * as cg from "react-icons/cg";

export const dropDownMenu = [
  // {
  //   label: "Edit Profile",
  //   icon: <cg.CgProfile />,
  //   path: "./profile",
  // },
  {
    label: "Change Password",
    icon: <fi.FiUnlock />,
    hasModal: true,
  },
  //   {
  //     label: "Logout",
  //     icon: <fi.FiPower />,
  //     path: "/login",
  //   },
];

export const department = [
  { deptId: 1, name: "Accounting" },
  { deptId: 2, name: "Business Management" },
  { deptId: 3, name: "Management" },
  { deptId: 4, name: "Software Engineering" },
  { deptId: 5, name: "Mechanical Engineering" },
  { deptId: 6, name: "Electrical Engineering" },
  { deptId: 7, name: "Civil Engineering" },
  { deptId: 8, name: "Construction technology Management" },
];

export const COL = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Module Code",
    accessor: "code",
  },
  {
    Header: "Module Name",
    accessor: "module_name",
  },
  {
    Header: "# of Question",
    accessor: "no_of_question",
  },
];

export const PROFILE_COLUMN = [
  { Header: "ID", accessor: "id" },
  { Header: "First Name", accessor: "firstname" },
  { Header: "Father Name", accessor: "middlename" },
  { Header: "G.F Name", accessor: "lastname" },
  { Header: "Email", accessor: "email" },
  { Header: "University", accessor: "inistitute" },
  { Header: "Department", accessor: "department" },
  { Header: "Phone No", accessor: "phone" },
  { Header: "Location", accessor: "address" },
];

export const MODULE_COLUMN = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Module Code",
    accessor: "moduleCode",
  },
  {
    Header: "Module Name",
    accessor: "moduleName",
  },
  {
    Header: "Department",
    accessor: "moduleForDepartment",
  },
  {
    Header: "Category",
    accessor: "moduleCategory",
  },
  {
    Header: "Total Question #",
    accessor: "moduleTotalQuestion",
  },
  {
    Header: "Status",
    accessor: "moduleStatus",
  },
];
