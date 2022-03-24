import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

/* This is the standard way to create the store used in redux & redux saga 
    Notice: 
    -> runSaga: sagaMiddleware.run(sagas) are the watchers
    -> reducers are the functions that get current state & action more details here
    https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    -> sagas are the watchers (listeners) 
    https://redux-saga.js.org/docs/introduction/GettingStarted
*/ 

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(sagas)
    }
}