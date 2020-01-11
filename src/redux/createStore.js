import { createStore, combineReducers } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'

const reducers = combineReducers({
    counterSlice
})

// preloadedState will be passed in by the plugin
export default preloadedState => {
    return configureStore({ reducer: reducers }, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};