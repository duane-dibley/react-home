import * as React from "react";
import { Button, Form } from "react-bootstrap";
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
    class WeatherComponent extends React.Component<any> {

      public render() {
        return <Form onSubmit={this.props.dataActions.fetchData}>
          <Form.Group controlId="param">
            <Form.Label>Param</Form.Label>
            <Form.Control type="input" placeholder="Param placeholder" />
          </Form.Group>

          {/* <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>;
      }

      // private onSubmitForm() {
      //   console.log("WeatherComponent onSubmitForm");
      // }

    }
  );
