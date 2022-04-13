import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Switch from "@material-ui/core/Switch";
import actionStore from "../../store/actionStore";

import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const { state } = useSelector((state) => state);
  const { darkMode } = state;

  return (
    <div className={darkMode ? "navBarDark" : "navBar"}>
      <div className="flex justify-between">
        <div className="flex ml-4">
          <Link to="/">
            <Fab variant="extended" size="medium">
              <HomeIcon sx={{}} />
              home page
            </Fab>{" "}
          </Link>
          <Link to="/favorite">
            <Fab variant="extended" size="medium">
              <FavoriteIcon sx={{}} />
              favorite page
            </Fab>{" "}
          </Link>
        </div>
        <Fab variant="extended" sx={{ ml: 2, mt: 1 }} size="medium">
          <Switch
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            onChange={(e) => dispatch(actionStore("SET_IS_DARK", !darkMode))}
          />
          dark mode
        </Fab>
      </div>
    </div>
  );
};
export default NavBar;
