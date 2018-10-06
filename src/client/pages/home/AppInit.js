import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import App from './App';

import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider  } from "react-redux";

export default function getAppComponents() {


  // Grab the state from a global variable injected into the server-generated HTML
  let preloadedState = undefined;

  try {
    if (window && window.__PRELOADED_STATE__) {
      preloadedState = window.__PRELOADED_STATE__;
      delete window.__PRELOADED_STATE__;
    }
  }
  catch(e) {}

  const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk)
  );

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      accent: red,
      type: 'light',
    },
  });

  // Create a new class name generator.
  const generateClassName = createGenerateClassName();

  const sheetsRegistry = new SheetsRegistry();
        
  // Create a sheetsManager instance.
  const sheetsManager = new Map();

  class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
      if (window && window.document) {
        const jssStyles = window.document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }

    render() {
      return (
        <Provider store={store}>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
              <App />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      )

    }
  }


  /**
   * This meant to be called on the server 
   * AFTER MAIN is renedered. 
   */
  function getStyleSheets() {
    return sheetsRegistry.toString();
  }

  const Container = Main
  return {
    Container,
    getStyleSheets,
    store
  }
    
}