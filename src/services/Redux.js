import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

createStore(rootReducer);
const componentEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, componentEnhancers(applyMiddleware(thunk)));
