import {
  XAxis,
  YAxis,
  Tooltip,
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
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsData;
