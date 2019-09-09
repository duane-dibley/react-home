import Button from "@material-ui/core/Button";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { MatTextField } from "./components/MatTextField";

class WeatherForm extends React.Component<InjectedFormProps> {

  public render() {
    return <MuiThemeProvider>
      <form onSubmit={this.props.handleSubmit}>
        <Field name="param" component={MatTextField} label="Param" />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </MuiThemeProvider>;
  }

  // public componentDidMount() {
  //   this.props.initialize({ param: "testing init param" });
  //   // set the value individually - dispatch?
  //   this.props.dispatch(change("weather", "param", "testing init param"));
  // }

}

// export default reduxForm({ form: "weather" })(WeatherForm);

export default connect(state => ({
  initialValues: {
    param: ""
  }
}))(reduxForm({
  form: "weather"
})(WeatherForm));

// MaterialUiForm.js
// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import TextField from 'material-ui/TextField'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
// import Checkbox from 'material-ui/Checkbox'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
// import asyncValidate from './asyncValidate'

// const validate = values => {
//   const errors = {}
//   const requiredFields = [
//     'firstName',
//     'lastName',
//     'email',
//     'favoriteColor',
//     'notes'
//   ]
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// }

// const renderTextField = ({
//   input,
//   label,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <TextField
//     hintText={label}
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     {...custom}
//   />
// )

// const renderCheckbox = ({ input, label }) => (
//   <Checkbox
//     label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange}
//   />
// )

// const renderRadioGroup = ({ input, ...rest }) => (
//   <RadioButtonGroup
//     {...input}
//     {...rest}
//     valueSelected={input.value}
//     onChange={(event, value) => input.onChange(value)}
//   />
// )

// const renderSelectField = ({
//   input,
//   label,
//   meta: { touched, error },
//   children,
//   ...custom
// }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}
//   />
// )

// const MaterialUiForm = props => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field
//           name="firstName"
//           component={renderTextField}
//           label="First Name"
//         />
//       </div>
//       <div>
//         <Field name="lastName" component={renderTextField} label="Last Name" />
//       </div>
//       <div>
//         <Field name="email" component={renderTextField} label="Email" />
//       </div>
//       <div>
//         <Field name="sex" component={renderRadioGroup}>
//           <RadioButton value="male" label="male" />
//           <RadioButton value="female" label="female" />
//         </Field>
//       </div>
//       <div>
//         <Field
//           name="favoriteColor"
//           component={renderSelectField}
//           label="Favorite Color"
//         >
//           <MenuItem value="ff0000" primaryText="Red" />
//           <MenuItem value="00ff00" primaryText="Green" />
//           <MenuItem value="0000ff" primaryText="Blue" />
//         </Field>
//       </div>
//       <div>
//         <Field name="employed" component={renderCheckbox} label="Employed" />
//       </div>
//       <div>
//         <Field
//           name="notes"
//           component={renderTextField}
//           label="Notes"
//           multiLine={true}
//           rows={2}
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }
