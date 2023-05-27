import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { groupBy, MONTH_OPTION, WEEKDAY } from "../../../components/constant";
import SidebarReport from "../../../components/Report/SidebarReport";

const moduleData = [
  {
    id: 1,
    fullName: "Full Name",
    sex: "Male",
    result: 0.6,
    city: "Addis Ababa",
    examDate: new Date(),
  },
  {
    id: 2,
    fullName: "Full Name",
    sex: "Female",
    result: 0.78,
    city: "Bahir Dar",
    examDate: new Date(),
  },
  {
    id: 3,
    fullName: "Full Name",
    sex: "Female",
    result: 0.25,
    city: "Addis Ababa",
    examDate: new Date(),
  },
  {
    id: 4,
    fullName: "Full Name",
    sex: "Male",
    result: 0.41,
    city: "Hawassa",
    examDate: new Date(),
  },
  {
    id: 5,
    fullName: "Full Name",
    sex: "Female",
    result: 0.96,
    city: "Adama",
    examDate: new Date(),
  },
  {
    id: 6,
    fullName: "Full Name",
    sex: "Male",
    result: 0.77,
    city: "Adama",
    examDate: new Date(),
  },
  {
    id: 7,
    fullName: "Full Name",
    sex: "Male",
    result: 0.1,
    city: "Addis Ababa",
    examDate: new Date(),
  },
  {
    id: 8,
    fullName: "Full Name",
    sex: "Male",
    result: 0.33,
    city: "Dire Dawa",
    examDate: new Date(),
  },
  {
    id: 9,
    fullName: "Full Name",
    sex: "Male",
    result: 0.36,
    city: "Addis Ababa",
    examDate: new Date(),
  },
];

const ModuleReport = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState([]);
  const [presence, setPresence] = useState("All");
  const [status, setStatus] = useState("All");
  const [monthly, setMonthly] = useState("All");
  const [yearly, setYearly] = useState("All");
  const [weekly, setWeekly] = useState("All");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [groupByCity, setGroupByCity] = useState([]);
  const [groupBySex, setGroupBySex] = useState([]);
  const [groupByDay, setGroupByDay] = useState([]);
  const [groupByTime, setGroupByTime] = useState([]);
  const [groupByMonth, setGroupByMonth] = useState([]);

  useEffect(() => {
    if (moduleData) {
      setAllData(
        moduleData?.map((obj) => {
          return {
            id: obj.id,
            fullName: obj.fullName,
            sex: obj?.sex,
            result: obj?.result,
            city: obj?.city,
            examDate: obj?.examDate,
            day: WEEKDAY[new Date(obj?.examDate).getDay()],
            hour: new Date(obj?.examDate).getHours(),
            month: MONTH_OPTION[new Date(obj?.examDate).getMonth()],
          };
        })
      );
    }
  }, [moduleData]);

  useEffect(() => {
    setFilteredData(allData);
  }, [allData]);

  // filter report
  useEffect(() => {
    // get all data first
    var temp = allData;
    if (search.length != 0) {
      temp = temp.filter((val) => search.find((s) => s.id == val.employeeId));
    }
    if (presence !== "All") {
      temp = temp.filter((val) => val.presence == presence);
    }
    if (status !== "All") {
      temp = temp.filter((val) => val.status === status);
    }
    if (from !== "") {
      temp = temp.filter((val) => val.createdAt >= from);
      // temp = temp.filter((val) => new Date(val.createdAt) >= new Date(from));
    }
    if (to !== "") {
      temp = temp.filter((val) => val.createdAt <= to);
      // temp = temp.filter((val) => new Date(val.createdAt) <= new Date(to));
    }
    if (weekly.fromDate && weekly.toDate) {
      temp = temp.filter(
        (val) =>
          new Date(val.createdAt) >= weekly.fromDate &&
          new Date(val.createdAt) <= weekly.toDate
      );
    }

    if (monthly !== "All") {
      temp = temp.filter(
        (val) => MONTH_OPTION[new Date(val.createdAt).getMonth()] == monthly
      );
    }
    if (yearly !== "All") {
      temp = temp.filter(
        (val) => new Date(val.createdAt).getFullYear() == yearly
      );
    }

    setFilteredData(temp);
  }, [search, presence, status, from, to, monthly, yearly, weekly]);

  useEffect(() => {
    var grouped = [];
    var groupFiltered = [];

    grouped = groupBy(filteredData, "city");
    setGroupByCity(
      grouped.map((s) => {
        return {
          name: s.length > 0 ? s[0]?.city : "",
          count: s.length,
        };
      })
    );

    grouped = groupBy(filteredData, "sex");
    setGroupBySex(
      grouped.map((s) => {
        return {
          name: s.length > 0 ? s[0].sex : "",
          count: s.length,
        };
      })
    );

    grouped = groupBy(filteredData, "day");
    setGroupByDay(
      grouped.map((s) => {
        return {
          name: s.length > 0 ? WEEKDAY[new Date(s[0].examDate).getDay()] : "",
          count: s.length,
        };
      })
    );

    grouped = groupBy(filteredData, "hour");
    setGroupByTime(
      grouped.map((s) => {
        return {
          name: s.length > 0 ? s[0]?.hour : "",
          count: s.length,
        };
      })
    );

    grouped = groupBy(filteredData, "month");
    setGroupByMonth(
      grouped.map((s) => {
        return {
          name: s.length > 0 ? s[0]?.month : "",
          count: s.length,
        };
      })
    );

    // grouped = groupByMonth(filteredData, "month");
    // setGroupByMonth(
    //   grouped.map((s) => {
    //     return {
    //       name: s.length > 0 ? s[0]?.month : "",
    //       count: s.length,
    //     };
    //   })
    // );
  }, [filteredData]);

  return (
    <React.Fragment>
      <section className="w-full">
        <div className="m-10">
          <div className="pb-10 text-center">
            <Typography variant="h6">Introduction to Programming</Typography>
            <Typography variant="body2">SWEng2324</Typography>
            <Typography variant="body2">Software Engineering</Typography>
          </div>
          <div className="flex gap-10">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%" aspect={1.5}>
                <BarChart
                  width={500}
                  height={300}
                  data={groupByCity}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" name="Student" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-1 gap-3">
              <div className="flex flex-col flex-1 gap-3">
                <SidebarReport label="Exam Day" groupBy={groupByDay} />
                <SidebarReport label="Sex" groupBy={groupBySex} />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <SidebarReport label="Time" groupBy={groupByTime} />
                <SidebarReport label="Month" groupBy={groupByMonth} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModuleReport;
