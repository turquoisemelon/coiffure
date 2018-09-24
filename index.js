import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } './reducer';
import { configureStore } from './store'
import App from './App';

const store = await configureStore();

const ReduxApp = () => (
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  );

ReduxApp();