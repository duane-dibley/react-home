import * as React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
        return <Navbar>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/weather">Weather</Nav.Link>
          </Nav>
        </Navbar>;
      }

    }
  );