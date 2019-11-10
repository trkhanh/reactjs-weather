//#region import
import React from "react";
import WeatherCard from "./WeatherCard";

import {
    Grid,
} from "@material-ui/core";
import useStyles from "../hooks/use-style";
//#endregion import

const AppLayout = props => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <WeatherCard
                        currentWeather={props.currentWeather}
                        forecast={props.forecast}
                        icon={props.icon}
                        recommendation={props.recommendation}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default AppLayout;