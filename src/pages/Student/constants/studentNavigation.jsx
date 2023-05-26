import { FaUserGraduate } from "react-icons/fa";
import { AiFillProfile, AiTwotoneSetting } from "react-icons/ai";
import { MdCreditScore, MdOutlineReport } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const student_status = [
  {
    sKey: 1,
    name: "Profile",
    path: "profile",
    icon: <AiFillProfile />,
  },
  {
    key: 2,
    name: "Overall Result",
    path: "overall",
    icon: <MdCreditScore />,
  },
  {
    key: 3,
    name: "Report",
    path: "report",
    icon: <MdOutlineReport />,
  },
  {
    key: 4,
    name: "Setting",
    path: "setting",
    icon: <AiTwotoneSetting />,
  },
];

export const side_navigation = [
  // {
  //   sideKey: 1,
  //   label: "Dashboard",
  //   path: "/student",
  //   icon: <BsGrid3X3GapFill />,
  // },
  // {
  //   sideKey: 2,
  //   label: "Profile",
  //   path: "profile",
  //   icon: <FaUserGraduate />,
  // },
  // {
  //   sideKey: 2,
  //   label: "Module",
  //   path: "modules",
  //   icon: <GrNotes />,
  // },

  // {
  //     sideKey: 2,
  //     label: 'Exams',
  //     icon: <GrNotes />,
  //     iconClosed: <RiArrowDownSFill />,
  //     iconOpened: <RiArrowUpSFill />,
  //     submenu: [
  //         {
  //             path: 'new-exam',
  //             label: 'New Exam',
  //             icon: <GrNotes />,

  //         },
  //         {
  //             path: 'upcoming-exam',
  //             label: 'Upcoming Exam',
  //             icon: <GrNotes />,

  //         },
  //         {
  //             path: 'On Going Exam',
  //             label: 'On Going Exam',
  //             icon: <GrNotes />,

  //         }
  //     ]

  // },
  // {
  //   sideKey: 3,
  //   label: "Result",
  //   path: "result",
  //   icon: <AiFillProfile />,
  // },

  {
    sideKey: 5,
    label: "Change Password",
    path: "change_password",
    icon: <AiFillProfile />,
  },
];
