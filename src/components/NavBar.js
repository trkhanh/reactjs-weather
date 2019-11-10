import {
    AppBar,
    Button,
    Grid,
    Toolbar,
  } from "@material-ui/core";
  import React  from "react";
  import useStyles from "../hooks/use-style";
  import logo from "../logo.svg";
  import TemporaryDrawer from './TemporaryDrawer';

const NavBar = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <img src={logo} className={classes.appLogo} alt="logo" />
            <Grid justify="space-between" container></Grid>
            <TemporaryDrawer />
            <Button className="github-btn">
              <a
                href="google.com.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  export default NavBar;
  