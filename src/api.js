import axios from "axios"

// const locApi = "https://www.trackcorona.live/api/countries"
const url = "https://covid19.mathdro.id/api"
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    return modifiedData
  } catch (error) {}
}