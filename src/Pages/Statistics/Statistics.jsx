import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  // eslint-disable-next-line no-unused-vars
  const [donation, setDonation] = useState([]);
  const [Value, setValue] = useState(0);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donations"));

    if (donations === null) {
      setValue(0);
    } else {
      setDonation(donations);

      setValue(donations.length);
    }
  }, []);

  const data = [
    { name: "Group A", value: 12 - Value },
    { name: "Group B", value: Value },
  ];

  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-[350px] md:max-w-2xl lg:max-w-7xl h-screen  mx-auto flex flex-col justify-center items-center">
      <PieChart width={380} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="md:flex gap-10 mt-10">
        <div className="flex gap-5 items-center justify-center">
          <span className="">Your Donation</span>
          <div className="bg-[#00C49F] h-2 w-16  rounded-sm"></div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <span className="">Total Donation</span>
          <div className="bg-[#FF444A] h-2 w-16 rounded-sm "></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
