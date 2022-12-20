import WeatherCard from "../Components/WeatherCard";
import WeatherTimeCard from "../Components/WeatherTimeCard";

const Home = () => {
  return (
    <div className="full-screen bg-gradient-to-b from-mid-purple to-light-purple flex flex-col items-center">
      <WeatherCard />
      <div>
        <WeatherTimeCard />
      </div>
    </div>
  );
};

export default Home;
