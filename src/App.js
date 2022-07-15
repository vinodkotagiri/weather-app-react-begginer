import './App.css';
import ForeCast from './components/ForeCast.component';
import Inputs from './components/Inputs.component';
import TemperatureAndDetails from './components/TemperatureAndDetails.component';
import TimeAndLocation from './components/TimeAndLocation.component';
import TopButtons from './components/TopButtons.component';
function App() {
  return (
    <div className="App mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-xl">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <ForeCast title={"hourly"} />
      <ForeCast title={"daily`"} />
    </div >
  );
}

export default App;
