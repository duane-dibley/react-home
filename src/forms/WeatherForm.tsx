import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField } from "redux-form-material-ui";

export default reduxForm({
  form: "weather"
})(
  () => <form>
    <Field name="param" component={TextField} label="Param" />
  </form>
);
