import {applyMiddleware,combineReducers,legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import { reducerTask } from './tasks/task.reducer';

const rootReducer = combineReducers({
    tasks:reducerTask,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));