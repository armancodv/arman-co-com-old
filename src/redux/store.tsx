import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';
import {routerMiddleware} from "connected-react-router";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Armanco'}) : (f) => f;


const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, reducers);


const logger = createLogger({
    collapsed: true,
});

export default function initStore() {
    const middlewares = [
        apiMiddleware,
        thunkMiddleware,
        // @ts-ignore
        routerMiddleware(),
        logger
    ];

    let store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middlewares), devTools),
    );

    let persistor = persistStore(store)

    return {
        store, persistor
    }
};