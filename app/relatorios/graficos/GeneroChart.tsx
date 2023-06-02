"use client"
import { ArcElement, Chart as ChartJS, Legend, Tooltip, Colors } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(Colors);



type Props = {
  labels: Array<any>,
  valores: Array<any>,
  title?: string
}

export default function GeneroChart({labels, valores, title}: Props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const
      },
    }
  }
  
  let data = {
    labels: labels,
    datasets: [
      {
        data: valores,
        borderWidth: 1,
      },
    ],
    
  };

  return (
    <>
      <h1 className="text-slate-500">{title}</h1>
      <div className="w-full h-72">
      <Pie data={data} options={options} />
      </div>
    </>
  );
}
