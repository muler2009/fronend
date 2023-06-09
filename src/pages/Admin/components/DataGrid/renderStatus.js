import * as React from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DoneIcon from "@mui/icons-material/Done";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { jsx as _jsx } from "react/jsx-runtime";
const StyledChip = styled(Chip)(({ theme }) => ({
  justifyContent: "left",
  "& .icon": {
    color: "inherit",
  },
  "&.Requested": {
    color: (theme.vars || theme).palette.info.dark,
    border: `1px solid ${(theme.vars || theme).palette.info.main}`,
  },
  "&.Approved": {
    color: (theme.vars || theme).palette.success.dark,
    border: `1px solid ${(theme.vars || theme).palette.success.main}`,
  },
  "&.PartiallyFilled": {
    color: (theme.vars || theme).palette.warning.dark,
    border: `1px solid ${(theme.vars || theme).palette.warning.main}`,
  },
  "&.Rejected": {
    color: (theme.vars || theme).palette.error.dark,
    border: `1px solid ${(theme.vars || theme).palette.error.main}`,
  },
}));
const Status = /*#__PURE__*/ React.memo((props) => {
  const { status } = props;
  let icon = null;
  if (["Rejected", "In Active"]?.includes(status)) {
    icon = /*#__PURE__*/ _jsx(ReportProblemIcon, {
      className: "icon",
    });
  } else if (status === "Pending") {
    icon = /*#__PURE__*/ _jsx(MoreHorizIcon, {
      className: "icon",
    });
    // console.log(["Requested", "Pending"]?.includes(status));
  } else if (status === "PartiallyFilled") {
    icon = /*#__PURE__*/ _jsx(AutorenewIcon, {
      className: "icon",
    });
  } else if (["Approved", "Active"]?.includes(status)) {
    icon = /*#__PURE__*/ _jsx(DoneIcon, {
      className: "icon",
    });
  }
  let label = status;
  if (status === "PartiallyFilled") {
    label = "Partially Approved";
  }
  return /*#__PURE__*/ _jsx(StyledChip, {
    className: status,
    icon: icon,
    size: "small",
    label: label,
    variant: "outlined",
  });
});
export function renderStatus(params) {
  if (params.value == null) {
    return "";
  }
  return /*#__PURE__*/ _jsx(Status, {
    status: params.value,
  });
}
