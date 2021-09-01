import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'store/reducers/rootReducer';
import rootSaga from 'store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
