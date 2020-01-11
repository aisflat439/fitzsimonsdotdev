import { createStore } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(53543, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: 40432,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

// function reducer() {
// }

// preloadedState will be passed in by the plugin
export default preloadedState => {
    return configureStore({ reducer: { counter: counterSlice.reducer } }, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};