import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { createMiddleware } from 'redux-beacon';
import GoogleTagManager from '@redux-beacon/google-tag-manager';

import userPreferencesSlice from './userPreferencesSlice'
import { requestReview } from './actions/gtmActions';

const eventsMap = {
  'review/requestReview': requestReview,
};

const gaMiddleware = createMiddleware(eventsMap, GoogleTagManager());

const middleware = [...getDefaultMiddleware(), gaMiddleware]

const reducers = combineReducers({
  userPreferences: userPreferencesSlice,
})

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return configureStore(
    { reducer: reducers },
    middleware,
    preloadedState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};