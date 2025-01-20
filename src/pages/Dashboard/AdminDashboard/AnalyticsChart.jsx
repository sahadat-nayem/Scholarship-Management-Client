import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
    // Bar Chart Data
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue (USD)",
        data: [3000, 4500, 3200, 5200, 6100, 4900],
        backgroundColor: "#68e8ac",
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Growth",
        data: [210, 330, 400, 380, 650, 700],
        borderColor: "#9edabe",
        backgroundColor: "rgba(158, 218, 190, 0.5)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl text-center mb-6 font-bold">
        Analytics Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="p-6 shadow-lg hover:shadow-2xl bg-white rounded-lg">
          <h3 className="text-xl mb-4 text-center font-semibold">
            Monthly Revenue
          </h3>
          <Bar data={barData} />
        </div>

        {/* Line Chart */}
        <div className="p-6 shadow-lg hover:shadow-2xl bg-white rounded-lg">
          <h3 className="text-xl mb-4 text-center font-semibold">
            User Growth
          </h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
