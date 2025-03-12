import React from "react";
import Chart from "react-apexcharts";

const chartData = [
  {
    id: 1,
    title: "Website View",
    subtitle: "Last Campaign Performance",
    data: {
      type: "bar",
      options: {
        chart: { id: "bar-chart", toolbar: { show: false } },
        xaxis: { categories: ["M", "T", "W", "T", "F", "S", "S"] },
        colors: ["#28a745"],
      },
      series: [{ name: "Views", data: [45, 15, 10, 25, 40, 20, 50] }],
    },
    timestamp: "campaign sent 2 days ago",
  },
  {
    id: 2,
    title: "Daily Sales",
    subtitle: "15% increase in today sales",
    data: {
      type: "line",
      options: {
        chart: { id: "line-chart", toolbar: { show: false } },
        xaxis: { categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
        colors: ["#007bff"],
      },
      series: [{ name: "Sales", data: [50, 200, 300, 400, 500, 350, 270, 450, 550] }],
    },
    timestamp: "updated 4 min ago",
  },
  {
    id: 3,
    title: "Completed Tasks",
    subtitle: "Last Campaign Performance",
    data: {
      type: "line",
      options: {
        chart: { id: "line-chart", toolbar: { show: false } },
        xaxis: { categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
        colors: ["#28a745"],
      },
      series: [{ name: "Tasks", data: [30, 150, 250, 400, 500, 450, 350, 400, 550] }],
    },
    timestamp: "just updated",
  },
];

const CCharts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100">
      {chartData.map((chart) => (
        <div key={chart.id} className="bg-white shadow-md rounded-xl p-4">
          <Chart options={chart.data.options} series={chart.data.series} type={chart.data.type} height={200} />
          <h3 className="text-lg font-semibold mt-2">{chart.title}</h3>
          <p className="text-sm text-gray-500">{chart.subtitle}</p>
          <p className="text-xs text-gray-400 mt-2">📅 {chart.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default CCharts;
