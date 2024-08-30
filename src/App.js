import { useState } from "react";
import Highlights from "./components/Highlight";
import Temp from "./components/Temp";
import axios from "axios";
function App() {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=605061e103af4dada28154201242308&q=${City}&aqi=no`
      );
      if (response.status === 200) {
        setWeather(response);
      } else {
        console.log("there is an error");
        setWeather("City name is invalid!!");
      }
    } catch (err) {
      console.log("the error is : ", err);
      setWeather("City name is invalid!!");
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center bg-gradient-to-r from-blue-300 to-yellow-300 h-screen">
        <div className="w-full lg:w-1/5 mt-10 lg:mt-40 px-4 lg:px-0">
          <Temp
            setCity={setCity}
            City={City}
            getWeatherData={getWeatherData}
            weatherData={weather}
          />
        </div>
        <div className="w-full lg:w-2/5 grid gap-6 mt-10 lg:mt-40 px-4 lg:px-0 py-12">
          <h3 className="text-white text-xl lg:text-2xl col-span-2 mb-4 sm:ml-[10%]">
            Today's Weather Highlights
          </h3>
          {weather && weather !== "City name is invalid!!" && (
            <>
              <Highlights
                stats={{
                  title: "Wind Status",
                  value: weather?.data?.current?.wind_kph,
                  dir: weather?.data?.current?.wind_dir,
                  unit: "kph",
                }}
              />
              <Highlights
                stats={{
                  title: "humidity",
                  value: weather?.data?.current?.humidity,
                  unit: "%",
                }}
              />
              <Highlights
                stats={{
                  title: "visibility",
                  value: weather?.data?.current?.vis_km,
                  unit: "km",
                }}
              />
              <Highlights
                stats={{
                  title: "Air Pressure",
                  value: weather?.data?.current?.pressure_mb,
                  unit: "mb",
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;