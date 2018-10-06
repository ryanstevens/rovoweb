import React from 'react';
import PropTypes from 'prop-types';
import Home from './containers/home'


class App extends React.Component {
  
  render() {
    const { classes } = this.props;

    return (
      <Home />
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home