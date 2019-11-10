//#region import
import React from "react";
import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";
import WeatherSearch from "./WeatherSearch";
import AppLayout from "./AppLayout";
import NavBar from "./NavBar";
//#endregion import

class Weather extends React.Component {
  render() {
    const { city, currentWeather, forecast, setCity, error } = this.props;
    const prefix = "wi wi-";
    const icon =
      prefix + weatherIcons.default[this.props.currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[this.props.currentWeather.icon_id].recommendation;
    return (
      <div>
        <NavBar />
        <WeatherSearch city={city} setCity={setCity} error={error} />
        <AppLayout
          currentWeather={currentWeather}
          forecast={forecast}
          icon={icon}
          recommendation={recommendation}
        />
      </div>
    );
  }
}
export default Weather;