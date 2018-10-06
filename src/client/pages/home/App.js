import React from 'react';
import PropTypes from 'prop-types';
import Home from './containers/home'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  home: {
    padding: 6,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  log: {
    height: '100%'
  }
});



class App extends React.Component {
  
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} >
        <Grid alignItems="center" justify="center" direction="row" container className={classes.log}>
          <Paper className={classes.home}>
            <Home />
          </Paper>
        </Grid>
      </Grid>  
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};


const StyledApp = withStyles(styles)(App);


export default StyledApp