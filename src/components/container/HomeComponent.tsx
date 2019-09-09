import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IState } from "../../interface";

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => ({})
)
  (
    class HomeComponent extends React.Component {

      public render() {
        return <div>HomeComponent</div>;
      }

    }
  );
