
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
        flexiGrow: 1,
        color: "black"
    },
    appBar: {
        background: "transparent",
        boxShadow: "none"
    },
    appLogo: {
        width: "160px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    layout: {
        marginTop: "20px"
    },
    card: {
        minWidth: 600,
        minHeight: 600
    },
    wi: {
        color: "#673ab7"
    },
    atmospheric: {
        fontSize: "28px",
        padding: "5px"
    },
    recommendation: {
        fontFamily: "Montserrat, sans-serif",
        padding: "20px 0px 10px 0px",
        fontSize: "26px",
        textAlign: "center"
    },
    buttons: {
        color: "black"
    },
    list: {
        width: 400
    },
    fullList: {
        width: "auto"
    },
    aboutImg: {
        padding: "30px 150px 0px 150px",
        width: "100px"
    },
    aboutText: {
        fontFamily: "Montserrat",
        padding: "30px"
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    search: {
        marginTop: "100px"
    },
    error: {
        color: "red",
        padding: "10px"
    }
}));

// Our hook
export default useStyles;