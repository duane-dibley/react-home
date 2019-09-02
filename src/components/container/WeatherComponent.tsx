import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as dataActions from "../../actions/dataActions";
import WeatherForm from "../../forms/WeatherForm";
import { IState } from "../../interface";

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => ({
    dataActions: bindActionCreators(dataActions, dispatch)
  })
)
  (
    class WeatherComponent extends React.Component<any> {

      public render() {
        return <WeatherForm />;
      }

    }
  );
