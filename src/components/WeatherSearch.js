import React, { useState, useEffect } from "react";
import useStyles from "../hooks/use-style";
import useDebounce from "../hooks/use-debounce";
import Search from "@material-ui/icons/Search";
import {
    CircularProgress,
    FormControl,
    Grid,
    Input,
    InputAdornment,
    Tooltip,
    Typography
  } from "@material-ui/core";


const WeatherSearch = props => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    let [isSearching, setSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const hasError = props.error ? true : false;
  
    useEffect(() => {
      if (debouncedSearchTerm) {
        props.setCity(debouncedSearchTerm);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setSearching((isSearching = false));
      }
    }, [debouncedSearchTerm]);
  
    return (
      <div className={classes.search}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <FormControl>
              <Input
                id="search-city"
                error={hasError}
                placeholder="Enter city name"
                onChange={e => {
                  setSearching((isSearching = true));
                  setSearchTerm(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Tooltip title="Optional: Enter a two-letter country code after the city name to make the search more precise. For example, London, GB.">
                      <Search />
                    </Tooltip>
                  </InputAdornment>
                }
                endAdornment={
                  isSearching && (
                    <InputAdornment position="end">
                      <CircularProgress size={20} />
                    </InputAdornment>
                  )
                }
              />
              {props.error && (
                <Typography className={classes.error}>{props.error}</Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  };

export default WeatherSearch;