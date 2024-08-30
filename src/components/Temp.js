const Temp = ({ setCity, City, getWeatherData, weatherData }) => {
  const handleInputCity = (e) => {
    setCity(e.target.value);
  };
  console.log(weatherData);
  return (
    <>
      <div className="flex justify-between leading-1">
        <div>
          <form className="relative">
            <input
              type="text"
              placeholder="Enter your city"
              onChange={handleInputCity}
              value={City}
              className=" focus:outline-none rounded-lg bg-slate-400 border border-slate-400 text-slate-200 w-60  text-md p-3 focus:border-slate-200 placeholder-stone-700 "
            />
            <div className=" absolute left-[85%] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
                onClick={getWeatherData}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>

      {weatherData && weatherData !== "City name is invalid!!" ? (
        <div className=" grid grid-cols-1 text-center mt-2">
          {weatherData?.data?.current?.is_day !== 0 ? (
            <div className="flex justify-center m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="yellow"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div>
          ) : (
            <div className="mt-[12px] ml-[135px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-9 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          )}

          <div className="text-slate-100 font-serif">
            <h3 className=" text-[45px] py-2">
              {weatherData?.data?.current?.temp_c}{" "}
              <span className=" text-[25px]">°C</span>
            </h3>
            <p className=" text-[20px] py-4 ">
              {weatherData?.data?.current?.condition.text}
            </p>
            <p className="text-[18px]">
              {weatherData?.data?.location?.localtime}|{" "}
              {weatherData?.data?.location?.name}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-1xl text-red-700 m-2 ">{weatherData}</p>
      )}
    </>
  );
};

export default Temp;
