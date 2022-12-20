import { SiIcloud } from "react-icons/si";

const WeatherCard = () => {
  return (
    <div className="w-4/5 mt-8 background-image text-white rounded-lg md:w-3/5 lg:w-2/5">
      <header className="text-2xl bg-black opacity-75 p-1 pl-6 rounded-t-lg">
        <span className="opacity-100">Fort Worth, TX As of 9:37pm CST</span>
      </header>
      <div className="grid grid-flow-col p-4">
        <div>
          <h1 className="text-8xl mb-2">44°</h1>
          <h1 className="text-4xl mb-2">Cloudy</h1>
          <h1 className="text-4xl">Day 48° : Night 42°</h1>
        </div>
        <div className="justify-self-end self-center">
          <span className="text-9xl bg-white">
            <SiIcloud />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
