// @flow
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './AppContainer';
import {rootReducer} from './reducers'
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

registerServiceWorker();