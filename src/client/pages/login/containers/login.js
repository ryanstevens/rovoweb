import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from 'axios'
import { Field, reduxForm } from 'redux-form'
 const styles = theme => ({
  loginbox: {
    height: '100px',
    width: '100%'
  }
});
 const mapStateToProps = state => {
  return { 
    name: state.login.name, 
    password: state.login.password
  };
};
 var count = 0;  
const mapDispatchToProps = dispatch => {
  return {
    tryLogin: info => {
      console.log("DISPATCHING", info);
       // setTimeout(function() {
       //   dispatch({
      //     type: 'change_name',
      //     name: info.name + (count++)
      //   });
      // }, 1000);
    }
  };
};
 class ContactForm extends React.Component {
   render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} noValidate={true}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </form>
    )
  }
}
 ContactForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(ContactForm)
 ContactForm = connect(
  state => ({
    initialValues: state.login // pull initial values from account reducer
  })
)(ContactForm)
 class Login extends React.Component {
   constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
   render() {
    
    const { classes } = this.props;
     return (
      <Grid xs={12} item className={classes.loginbox} container alignItems="center" justify="center" direction="column">
        <ContactForm onSubmit={this.login}>
         </ContactForm>
      </Grid>
    )
  }
   login(values) {
    this.props.tryLogin(values);
  }
}
 Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
 export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login)); 