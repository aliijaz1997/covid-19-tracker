import React, { useState, useEffect } from "react"
import { fetchDailyData } from "./api"
import { Line } from "react-chartjs-2"
import "./chart.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchApi()
  }, [])

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(data => data.confirmed),
            label: "Infected",
             backgroundColor  : "orange",
            pointBackgroundColor: "black"
          },
          {
            data: dailyData.map(data => data.deaths),
            label: "Deaths",
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            fill: true,
          },
        ],
      }}
    />
  ) : null

  return <div className = "chart" >{lineChart}</div>
}

export default Chart