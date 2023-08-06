import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "./PaiChartBox.scss";

const PaiChartBox = ({ monthlyVisitors }: any) => {
  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="pai-chart-container">
      <div className="audience-title">
        <h3>Audience</h3>
        <h4>June</h4>
      </div>

      <div className="pai-chart">
        <ResponsiveContainer width="99%" height={200}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#fff", borderRadius: "5px" }}
            />
            <Pie
              data={monthlyVisitors}
              innerRadius={"50%"}
              outerRadius={"70%"}
              paddingAngle={5}
              dataKey="numberOfVisits"
            >
              {monthlyVisitors.map((item: any) => (
                <Cell key={item.gender} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="GenderOptions">
        {monthlyVisitors.map((item: any) => (
          <div className="option" key={item.gender}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.gender}</span>
            </div>
            <span>{item.numberOfVisits}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaiChartBox;
