const CurrentWeather = ({ data }) => {
  return (
    <div className="mx-auto mt-0 mb-5 w-80 rounded-3xl bg-stone-700/80 px-[20px] pt-0 pb-[20px] text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="m-0 text-lg font-semibold leading-none tracking-[1px]">
            {data.city}
          </p>
          <p className="m-0 text-sm font-normal leading-none">
            {data.weather[0].description}
          </p>
        </div>
        <img
          className="w-[100px]"
          src={`../../../public/icons/${data.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="my-[10px] mx-0 w-auto text-[70px] font-semibold tracking-[-5px] ">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="w-full pl-5">
          <div className="flex justify-between">
            <span className="text-left text-xs font-black">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xs font-normal">Feels Like</span>
            <span className="text-right text-xs font-semibold">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xs font-normal">Wind</span>
            <span className="text-right text-xs font-semibold">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xs font-normal">Humidity</span>
            <span className="text-right text-xs font-semibold">
              {data.main.humidity} %
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xs font-normal">Pressure</span>
            <span className="text-right text-xs font-semibold">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
