import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { change } from "redux-form";
import * as weatherActions from "../../actions/weatherActions";
import WeatherForm from "../../forms/WeatherForm";
import { IState } from "../../interface";

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => ({
    weatherActions: bindActionCreators({ ...weatherActions, change }, dispatch)
  })
)
  (
    class WeatherComponent extends React.Component<{weatherActions}> {

      public render() {
        return <WeatherForm onSubmit={this.props.weatherActions.fetchWeather}/>;
      }

    }
  );
