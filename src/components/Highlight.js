function Highlights({ stats }) {
    return (
      <div className="flex flex-col justify-start  text-slate-500 items-center bg-slate-300 rounded-[10px] pb-3">
        <h1 className="text-sm mt-2">{stats.title}</h1>
        <div className="mt-2">
          <span className="text-4xl font-semibold">{stats.value}</span>
          <span className="text-2xl">{stats.unit}</span>
        </div>
        {stats.title === "Wind Status" ? (
          <div className="flex justify-center text-center m-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span className="ml-[8px] text-2xl">{stats.dir}</span>
          </div>
        ) : null}
        {stats.title === "humidity" ? (
          <div className="w-[100%] bg-gray-200 rounded-full h-1.5 m-6   dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
              style={{ width: `${stats.value}%` }}
            ></div>
          </div>
        ) : null}
      </div>
    );
  }
  
  export default Highlights;