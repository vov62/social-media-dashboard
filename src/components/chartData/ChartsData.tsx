import React, { PureComponent } from "react";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chartsData.scss";

const ChartsData = ({ userData }: any) => {
  const customColors = ["#FF5733", "#33FF57", "#5733FF"];

  // console.log(userData);

  return (
    <div className="dailyVisitorsData-container">
      <div>
        <h3>Daily Visitors</h3>
      </div>

      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={userData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              label={{ display: "none" }}
            />
            {/* <Legend /> */}
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="Date" />
            <YAxis dataKey="Visitors" />
            <Bar
              // type="monotone"
              dataKey="Visitors"
              stroke="#33FF57"
              fill="#FF5733"
              strokeWidth={2}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsData;
