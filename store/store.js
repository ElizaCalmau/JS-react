import { createStore, combineReducers, compose } from 'redux'
import { themeReducer } from './theme/reducer';
const rootReducer = combineReducers({
    theme: themeReducer,
})
export const store = createStore(rootReducer, {}, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));