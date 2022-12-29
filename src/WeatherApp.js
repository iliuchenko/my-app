import "./styles.css";
import Form from "./Form.js";
import AvailableCities from "./AvailableCities.js";
import CurrentCity from "./CurrentCity.js";
import MainWeather from "./MainWeather.js";
import WeatherForecast from "../../WeatherForecast.js";
import Footer from "./Footer.js";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Form />
      <AvailableCities />
      <CurrentCity />
      <MainWeather />
      <WeatherForecast />
      <Footer />
    </div>
  );
}
