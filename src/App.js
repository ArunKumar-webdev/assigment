import * as React from "react";
import { Button } from "@mui/material";
import Popup from "./Popup";
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
      <diV class="main">
        <Button
          style={{
            color: "white",
            textTransform: "capitalize",
            fontSize: "20px"
          }}
        >
          <KeyboardArrowLeftIcon /> View Audience
        </Button>
      </diV>

      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            class="mainbtnSegment"
            onClick={() => toggleDrawer(anchor, true)}
          >
            Save Segment
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => toggleDrawer(anchor, false)}
          >
            <Popup click={toggleDrawer} />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
