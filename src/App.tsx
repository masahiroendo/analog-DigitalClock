import { FC, useEffect, useState } from "react";
import "./App.css";
import { range } from "./utils";

type timeType = Date;

type handsPositionType = {
  hour: string;
  minutes: string;
  seconds: string;
};

const App: FC = () => {
  const [currentHour, setCurrentHour] = useState<number | undefined>();
  const [currentMinutes, setCurrentMinutes] = useState<number | undefined>();
  const [currentSeconds, setCurrentSeconds] = useState<number | undefined>();
  const [currentAnalogHour, setCurrentAnalogHour] = useState<
    number | undefined
  >();
  const [currentAnalogMinutes, setCurrentAnalogMinutes] = useState<
    number | undefined
  >();
  const [currentAnalogSeconds, setCurrentAnalogSeconds] = useState<
    number | undefined
  >();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const time = new Date().toLocaleTimeString();
  //     setCurrentTime(time);
  //     console.log(time);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    // const interval = setInterval(() => {
    let curHour;
    const curTime = new Date();

    const curHourHand = curTime.getHours() * 30;
    const curMinHand = curTime.getMinutes() * 6;
    const curSecHand = curTime.getSeconds() * 6;

    setCurrentAnalogHour(curHourHand + curMinHand / 12);
    setCurrentAnalogMinutes(curMinHand + curSecHand / 60);
    setCurrentAnalogSeconds(curSecHand);

    curHour = curTime.getHours();
    const curMin = curTime.getMinutes();
    const curSeconds = curTime.getSeconds();

    if (curHour > 12) {
      curHour = curHour - 12;
    }
    setCurrentHour(curHour);
    setCurrentMinutes(curMin);
    setCurrentSeconds(curSeconds);

    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  console.log(currentAnalogHour, currentAnalogMinutes, currentAnalogSeconds);

  const handsPosition: handsPositionType = {
    hour: `rotate-[calc(${currentAnalogHour}deg)]`,
    minutes: `rotate-[calc(${currentAnalogMinutes}deg)]`,
    seconds: `rotate-[calc(${currentAnalogSeconds}deg)]`,
  };

  console.log(handsPosition);

  const analogClockHour = (start: number, end: number) => {
    return range(start, end).map((i) => (
      <div
        key={i}
        className="absolute inset-5 text-white text-center rotate-[calc(0deg)]"
      >
        <b className="text-3xl opacity-50 font-medium inline-block rotate-[calc(-0deg)] ">
          {i}
        </b>
      </div>
    ));
  };

  return (
    <div className="m-0 p-0 box-border font-sans">
      <div className="flex justify-center items-center min-h-screen bg-[#2f363e]">
        <div className="relative flex justify-center items-center bg-[#2f363e] min-h-[500px] rounded-2xl shadow-container flex-col">
          <div
            id="analog-clock"
            className="relative flex justify-center items-center w-[450px] h-[450px] bg-[#2f363e] rounded-full shadow-analogClock mb-[40px] before:content-[''] before:absolute before:w-4 before:h-4 before:bg-[#2f363e] before:border-[2px] before:border-solid before:border-[#fff] before:rounded-full before:z-[13]"
          >
            <div
              id="analog-clock-hand-hour"
              className="absolute h-[180px] w-[180px]"
            >
              <i
                className={` h-[180px] w-[180px] flex justify-center absolute rounded-full before:content-[''] before:absolute before:w-2 before:h-[90px] before:bg-gray-500 before:rounded-t-md before:z-10 before:origin-bottom before:${handsPosition[hour]}`}
              ></i>
            </div>
            <div
              id="analog-clock-hand-minute"
              className="absolute h-[240px] w-[240px]"
            >
              <i className="h-[240px] w-[240px] flex justify-center absolute rounded-full before:content-[''] before:absolute before:w-1 before:h-[120px] before:bg-gray-300 before:rounded-t-md before:z-11"></i>
            </div>
            <div
              id="analog-clock-hand-second"
              className="absolute h-[300px] w-[300px]"
            >
              <i className="h-[300px] w-[300px] flex justify-center absolute rounded-full before:content-[''] before:absolute before:w-[2px] before:h-[180px] before:bg-gray-200 before:rounded-lg before:z-12"></i>
            </div>
            {analogClockHour(1, 12)}
            <div className="absolute inset-5 text-white text-center rotate-[calc(30deg)]">
              <b className="text-3xl opacity-50 font-medium inline-block rotate-[calc(-30deg)] ">
                1
              </b>
            </div>
            <div className="absolute inset-5 text-white text-center rotate-[calc(60deg)]">
              <b className="text-3xl opacity-50 font-medium inline-block rotate-[calc(-60deg)] ">
                2
              </b>
            </div>
            <div className="absolute inset-5 text-white text-center rotate-[calc(90deg)]">
              <b className="text-3xl opacity-50 font-medium inline-block rotate-[calc(-90deg)] ">
                3
              </b>
            </div>
            <div className="absolute inset-5 text-white text-center rotate-[calc(120deg)]">
              <b className="text-3xl opacity-50 font-medium inline-block rotate-[calc(-120deg)] ">
                4
              </b>
            </div>
          </div>
          <div
            id="digital-clock"
            className="flex m-4 px-4 py-2.5 text-xl font-semibold rounded-[40px] border-solid border-2 border-[rgba(0,0,0,0.5)] shadow-digitalClock"
          >
            <div
              className="relative w-10 text-center font-medium text-gray-300 after:content-[':'] after:absolute after:justify-center after:right-[-3px] "
              id="hours"
            >
              {currentHour < 10 ? "0" + currentHour : currentHour}
            </div>
            <div
              className="relative w-10 text-center font-medium text-gray-300 after:content-[':'] after:absolute after:justify-center after:right-[-2px] after:animate-seconds"
              id="minutes"
            >
              {currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}
            </div>
            <div
              className="relative w-10 text-center font-medium text-gray-300"
              id="seconds"
            >
              {currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}
            </div>
            <div
              className="relative w-10 text-center font-medium text-xs text-gray-300 flex justify-center items-center"
              id="ampm"
            >
              {currentHour < 13 ? "AM" : "PM"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
