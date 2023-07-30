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
  AreaChart,
  Area,
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
          {/* <BarChart data={userData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              label={{ display: "none" }}
            />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis dataKey="Visitors" />
            <Bar
              type="monotone"
              dataKey="Visitors"
              stroke="#33FF57"
              fill="#FF5733"
              strokeWidth={2}
            />
          </BarChart>  */}

          <AreaChart
            width={500}
            height={400}
            data={userData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Visitors"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            {/* <Area
              type="monotone"
              dataKey="Visitors"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Visitors"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsData;
