import React from "react";
import Chart from "react-apexcharts";

const DashboardCharts = () => {
  // Line Chart Data
  const lineChartOptions = {
    chart: { id: "line-chart" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
  };
  const lineChartSeries = [{ name: "Sales", data: [10, 40, 25, 50, 49] }];

  // Bar Chart Data
  const barChartOptions = {
    chart: { id: "bar-chart" },
    xaxis: { categories: ["A", "B", "C", "D", "E"] },
  };
  const barChartSeries = [{ name: "Revenue", data: [30, 70, 45, 80, 60] }];

  // Pie Chart Data
  const pieChartOptions = { labels: ["Product A", "Product B", "Product C"] };
  const pieChartSeries = [44, 55, 41];

  return (
    <div className="flex gap-4 p-4">
      {/* Line Chart */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow">
        <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
      </div>

      {/* Bar Chart */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow">
        <Chart options={barChartOptions} series={barChartSeries} type="bar" height={300} />
      </div>

      {/* Pie Chart */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow">
        <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={300} />
      </div>
    </div>
  );
};

export default DashboardCharts;
