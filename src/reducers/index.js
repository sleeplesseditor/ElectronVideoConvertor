import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import videosReducer from './videosReducer';

const rootReducer = combineReducers({
    videos: videosReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
