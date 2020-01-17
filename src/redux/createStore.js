import { combineReducers, getDefaultMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'

// const middleware = [...getDefaultMiddleware()]

const reducers = combineReducers({
    counterSlice
})

// preloadedState will be passed in by the plugin
export default preloadedState => {
    return configureStore(
        { reducer: reducers },
        // middleware,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};