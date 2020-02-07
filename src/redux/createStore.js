import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// import { createMiddleware } from 'redux-beacon';
// import GoogleAnalytics, { trackPageView } from '@redux-beacon/google-analytics';

import userPreferencesSlice from './userPreferencesSlice'

// const eventsMap = {
//   'review/requestReview': ''
// };

// const gaMiddleware = createMiddleware(eventsMap, GoogleAnalytics());


const middleware = [...getDefaultMiddleware()]

const reducers = combineReducers({
  userPreferences: userPreferencesSlice,
})

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return configureStore(
    { reducer: reducers },
    middleware,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};