import React from "react";
import {
    Button,
    Divider,
    Drawer,
    Typography
} from "@material-ui/core";

import about from "../about.png";
import useStyles from "../hooks/use-style";

const TemporaryDrawer = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <img src={about} className={classes.aboutImg} alt="about" />
            <Typography className={classes.aboutText} component="div" gutterBottom>
                <b>ReactWeather</b> is a labor of{" "}
                <span role="img" aria-label="love emoji" style={{ color: "red" }}>
                    ♥️
          </span>{" "}
                project lovingly crafted by{" "}
                <a
                    href="https://github.com/denniskigen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @denniskigen
          </a>
                <p>
                    It draws inspiration from {""}
                    <a
                        href="https://github.com/denniskigen/ng-weather"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ng-weather
            </a>
                    , a similar projected written in Angular.
          </p>
                <p>
                    Search functionality now works. What's next? Look away, TDD
                    enthusiasts. Yep. I made the cardinal sin no dev worth their salt ever
                    makes. I didn't write tests. Fear not, all that Jest goodness is
                    coming very soon indeed.
          </p>
            </Typography>
            <Divider variant="middle" />
            <Typography className={classes.aboutText} component="div" gutterBottom>
                <h3>Credits</h3>
                <ul>
                    <li>
                        <a
                            href="https://material-ui.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Material UI
              </a>
                    </li>
                    <li>
                        <a
                            href="https://openweathermap.org/api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            OpenWeatherMap API
              </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/erikflowers/weather-icons"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Erik Flowers' weather icons
              </a>
                    </li>
                    <li>
                        <img
                            src={about}
                            alt="small app icon for attribution"
                            width="16px"
                        />{" "}
                        icon made by{" "}
                        <a
                            href="https://www.flaticon.com/authors/good-ware"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Good ware
              </a>{" "}
                        from{" "}
                        <a
                            href="https://www.flaticon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            flaticon
              </a>
                    </li>
                </ul>
            </Typography>
        </div>
    );
    return (
        <div>
            <Button className="about-btn" onClick={toggleDrawer("right", true)}>
                About
        </Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer("right", false)}
            >
                {sideList("right")}
            </Drawer>
        </div>
    );
};

export default TemporaryDrawer