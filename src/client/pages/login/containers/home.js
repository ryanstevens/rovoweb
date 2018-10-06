import React from 'react';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';

const styles = theme => ({
  homebox: {
    height: '100px',
    width: '100%'
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { classes } = this.props;

    return (
      <Grid xs={12} item className={classes.homebox} container alignItems="center" justify="center" direction="column">
        <div> 
          ROVO!!!
        </div>
      </Grid>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);