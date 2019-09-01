import * as React from "react";
import { connect } from "react-redux";
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
    class WeatherComponent extends React.Component {

      public render() {
        return <div>WeatherComponent</div>;
      }

    }
  );
