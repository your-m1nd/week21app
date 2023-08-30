import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Учёба", 4],
  ["Еда", 1],
  ["Прогулка", 3],
  ["Время с ребенком", 15],
  ["Сон", 4],
  ["Просмотр фильмов/сериалов", 2],
  ["Время для себя", 1]
];

export const options = {
  title: "Моя активность в течение дня",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

