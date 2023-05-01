export const BASE_URL = "http://127.0.0.1:8000/api";
export const BASE_FILE_URL = "http://127.0.0.1:8000/File/";

// export const BASE_URL = "https://secretary.anchorerp.org/api";
// export const BASE_FILE_URL = "https://secretary.anchorerp.org/api/File/";

export const API_TAGS = {
  ASSIST_ADMIN: "assist-admins",
  QUESTIONS: "questions",
  MODULES: "modules",
  REGISTER_STUDENT: "register-student",
  SUBSCRIPTIONS: "Subscription",
};

export const ATTENDANCE_TYPE = [
  "Fingerprint",
  "Regular",
  "Central Controller",
  "Regular Employee Led",
];

export const ATTENDANCE_SUBMISSION_TYPE = [
  "Daily",
  "Weekly",
  "Fortnights",
  "Monthly",
];

export const CASE_STATUS = [
  "All",
  "Requested",
  "Checked",
  "Approved",
  "In Progress",
  "Assigned",
  "Ready",
  "Pushed Out",
  "Completed",
  "Declined",
  "Reversed",
  "Messenger",
  "Delivered",
  "Reply",
];

export const DEFAULT_VALUES = {
  MANAGEMENT: "Management",
  INCOMING: "Incoming",
  OUTGOING: "Outgoing",
  MESSAGE: "Message",
};

export const CASE_PRIORITY_TYPE = ["Normal", "Urgent"];

export const EMPLOYEE_STATUS = ["Active", "InActive"];

export const REASON_TEMPLATES = ["There was no taxi"];

export const TEMPLATE_TYPE = [
  "Document",
  "Letter",
  "Late Reason Remark",
  "SMS Templates",
];

export const MONTH = [
  { value: 1, label: "January" },
  { value: 1, label: "February" },
  { value: 1, label: "March" },
  { value: 1, label: "April" },
  { value: 1, label: "May" },
  { value: 1, label: "June" },
  { value: 1, label: "July" },
  { value: 1, label: "August" },
  { value: 1, label: "September" },
  { value: 1, label: "October" },
  { value: 1, label: "November" },
  { value: 1, label: "December" },
];

export const MONTH_OPTION = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const YEAR_OPTION = [
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
];

export const REPORT_COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#4BCDC4",
  "#0079FF",
  "#FF6B6B",
];

export const APPOINTMENT_TYPE = ["Regular", "Urgent"];

export const APPOINTMENT_STATUS = [
  "Pending",
  "Met",
  "Cancelled",
  "Postponed",
  "Expired",
];

export const RESERVATION_STATUS = ["Pending", "Cancelled", "Expired"];

export const COMPANY_RENEWAL_CATEGORY = [
  "Vehicle & Machinery-related",
  "Office-related",
  "Professionals-related",
];

export const ATTENDANCE_PRESENCE = [
  "Present",
  "Late",
  "Permission",
  "Warned",
  "Exempted",
  "Absent",
];

export const ATTENDANCE_STATUS = [
  "Valid",
  "Pending",
  "Remarked",
  "Exempted",
  "Warned",
  "Penalized",
];

export const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const TEMPLATE_STATUS = ["Accepted", "Rejected"];

export const COURT_CASE_STATUS = [
  "Requested",
  "Approved",
  "Declined",
  "Delivered",
];

// new Date().toISOString().split("T")[0]
