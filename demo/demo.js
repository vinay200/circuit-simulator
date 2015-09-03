import React from 'react';
import ReactDOM from 'react-dom';

import Theme from 'circuitsim-theme';
import App from '../src/App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../src/reducers';
import getWindowDimensions from '../src/utils/getWindowDimensions.js';

// expose for devTools TODO only in dev
window.React = React;

const COLORS = Theme.COLORS;
const {lineHeight, fontSize, fontFamily} = Theme.TYPOGRAPHY;

const sidebarWidth = 300;
const sidebarWidthPx = `${sidebarWidth}px`;
const styles = {
  global: {
    '*': {
      lineHeight,
      fontSize,
      fontFamily,
      backgroundColor: COLORS.background,
      color: COLORS.base
    }
  },
  main: {
    position: 'absolute',
    top: '0px',
    left: sidebarWidthPx,
    right: '0px',
    bottom: '0px'
  },
  side: {
    position: 'absolute',
    width: sidebarWidthPx,
    top: '0px',
    left: '0px',
    bottom: '0px'
  }
};

function getCanvasSize() {
  const windowSize = getWindowDimensions();
  return {
    width: windowSize.width - sidebarWidth,
    height: windowSize.height
  };
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App
      styles={ styles }
      theme={ Theme }
      getCanvasSize={ getCanvasSize }
    />
  </Provider>,
  document.getElementById('circuitsim')
);