import React from 'react';
import ReactDOM from 'react-dom';
//line 4 - 5 added from fb react boot strap guide via https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
