import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import * as dataActions from "../../actions/dataActions";
import { IState } from "../../interface";

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => ({
    dataActions: bindActionCreators(dataActions, dispatch)
  })
)
  (
    class NavigationComponent extends React.Component {

      public render() {
        return <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6">
              {/* Home */}
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Typography variant="h6">
              {/* Weather */}
              <NavLink to="/weather">Weather</NavLink>
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>;
      }

    }
  );
