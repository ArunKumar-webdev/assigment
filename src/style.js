import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    backgroundColor: "rgb(67, 201, 206)",
    height: "80px",
    margin: "-8px"
  },
  mainbtnSegment: {
    marginTop: "50px",
    marginLeft: "50px",
    border: "5px solid white",
    backgroundColor: "grey",
    color: "white"
  },
  mainbtn: {
    color: "white",
    textTransform: "capitalize",
    fontSize: "20px"
  },
  btnCancel: {
    color: "grey",
    backgroundColor: "white",
    marginLeft: "10px",
    textTransform: "capitalize"
  },
  popup: {
    display: "flex",
    backgroundColor: "rgb(67, 201, 206)",
    height: "80px"
  },
  btnSegment: {
    color: "white",
    textTransform: "capitalize",
    fontSize: "20px"
  },
  txtfield: {
    width: "450px"
  },
  middle: {
    height: "80vh",
    overflowY: "auto"
  },
  autoComplete2: {
    margin: "10px"
  },
  divautoComplete: {
    border: "3px solid white",
    marginLeft: "10px",
    display: "flex"
  },
  divbtnSave: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightblue",
    position: "absolute",
    bottom: "0",
    height: "80px",
    width: "100%"
  },
  btnSave: {
    color: "white",
    backgroundColor: "grey",
    marginLeft: "10px",
    textTransform: "none"
  },
  link: {
    fontSize: "12px",
  },
  divauto2: {
    border: "3px solid lightblue"
  },
  disauto2: {
    display: "flex",
    alignItems: "center"
  }
}));
