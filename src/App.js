import * as React from "react";
import { Button } from "@mui/material";
import Slider from "./Slider";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./styles.css";

export default function ControllableStates() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="">
      <div className="main">
        <Button
          style={{
            color: "white",
            textTransform: "capitalize",
            fontSize: "20px"
          }}
        >
          <KeyboardArrowLeftIcon /> View Audience
        </Button>
      </div>

      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="mainbtnSegment"
            onClick={() => toggleDrawer(anchor, true)}
          >
            Save Segment
          </button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => toggleDrawer(anchor, false)}
          >
            <Slider click={toggleDrawer} />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
