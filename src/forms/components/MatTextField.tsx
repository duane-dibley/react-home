import TextField from "@material-ui/core/TextField";
import * as React from "react";

export function MatTextField({
  input,
  label,
  meta: { touched, error },
  ...custom
}) {
  return (
    <TextField
      // hintText={label}
      // floatingLabelText={label}
      // errorText={touched && error}
      label={label}
      {...input}
      {...custom}
    />
  );
}
