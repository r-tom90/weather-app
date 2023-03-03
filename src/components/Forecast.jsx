import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  // Used to find day in local time
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="ml-2 text-2xl font-bold text-slate-900">
        7-Day Forecast
      </label>
      <Accordion allowZeroExpanded>
        {/* Maps upto 7 days including 0 */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="m-1 flex h-10 cursor-pointer items-center rounded-2xl bg-stone-300/90 py-1 px-5 text-sm">
                  <img
                    className="w-7"
                    src={`../../public/icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="ml-2 flex-1 font-semibold text-slate-900">
                    {forecastDays[idx]}
                  </label>
                  <label className="mr-4 flex-1 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-gray-500">
                    {Math.round(item.main.temp_min)}°C/
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="mx-1 grid grid-cols-2 gap-x-3 rounded-xl bg-black/60 px-4 py-1">
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">
                    Pressure:
                  </label>
                  <label className="text-neutral-300">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">
                    Humidity:
                  </label>
                  <label className="text-neutral-300">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">Clouds:</label>
                  <label className="text-neutral-300">{item.clouds.all}%</label>
                </div>
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">
                    Wind speed:
                  </label>
                  <label className="text-neutral-300">
                    {item.wind.speed}m/s
                  </label>
                </div>
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">
                    Sea level:
                  </label>
                  <label className="text-neutral-300">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="flex h-[27px] items-center justify-between">
                  <label className="font-semibold text-gray-300">
                    Feels like:
                  </label>
                  <label className="text-neutral-300">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
