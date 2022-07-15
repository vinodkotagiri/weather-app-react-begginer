import { Fragment, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import ForeCast from './components/ForeCast.component';
import Inputs from './components/Inputs.component';
import TemperatureAndDetails from './components/TemperatureAndDetails.component';
import TimeAndLocation from './components/TimeAndLocation.component';
import TopButtons from './components/TopButtons.component';
import getFormattedWeatherData from './services/WeatherServices';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [query, setQuery] = useState({ q: "Hyderabad" })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState('')
  useEffect(() => {
    const message = query.q ? query.q : 'current location'
    toast.info(`Fetching weather for ${message}`)
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          toast.success(`Successfully feched whether data for ${data.name}`)
          setWeather(data)
        })
    }
    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units !== 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700'
    return 'from-yellow-700 to-orange-700'
  }


  return (
    <div className={`App mx-auto max-w-screen-lg mt-2 py-1 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 rounded-xl ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <Fragment>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <ForeCast items={weather.hourly} />
          <ForeCast items={weather.daily} />
        </Fragment>
      )}
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div >
  );
}

export default App;
