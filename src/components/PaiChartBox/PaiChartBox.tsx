import { socialMediaUsers } from "../../dataMock/dataMock";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./PaiChartBox.scss";

const PaiChartBox = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="pai-chart-container">
      <h3>Audience</h3>

      <div className="pai-chart">
        <PieChart width={300} height={200}>
          <Tooltip contentStyle={{ background: "#fff", borderRadius: "5px" }} />

          <Pie
            data={data}
            cx={150}
            // cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default PaiChartBox;
