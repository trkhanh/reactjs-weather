import React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography
} from "@material-ui/core";
import useStyles from "../hooks/use-style";
import WeatherCardSubheader from "./WeatherCardSubheader"
import Forecast from "./Forecast"

const WeatherCard = props => {
    const classes = useStyles();
    const humidity = "wi wi-humidity";
    const strongWind = "wi wi-strong-wind";
    return (
        <Card className={classes.card}>
            <CardHeader
                title={props.currentWeather.city + ", " + props.currentWeather.country}
                subheader={
                    <WeatherCardSubheader currentWeather={props.currentWeather} />
                }
            />
            <CardContent>
                <CardMedia
                    className={`${props.icon} ${classes.wi}`}
                    src={props.icon}
                    style={{ fontSize: "128px", float: "right" }}
                />
                <Typography
                    variant="h2"
                    className="big-temp"
                    color="textPrimary"
                    component="h2"
                    style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
                >
                    {Math.round(props.currentWeather.temperature)}&deg;C
          </Typography>
                <Typography
                    variant="subtitle2"
                    className="atmospheric-conditions"
                    color="textSecondary"
                    gutterBottom
                    style={{ paddingTop: "40px" }}
                >
                    <span
                        className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
                    ></span>
                    {props.currentWeather.wind_speed} km/h Winds{" "}
                    <span
                        className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
                    ></span>
                    {props.currentWeather.humidity}% Humidity
          </Typography>
                <Typography
                    className={`${classes.recommendation} recommendation`}
                    color="textPrimary"
                    gutterBottom
                >
                    {props.recommendation}
                </Typography>
                <Divider variant="middle" />
                <Forecast forecast={props.forecast} />
            </CardContent>
        </Card>
    );
};


export default WeatherCard;