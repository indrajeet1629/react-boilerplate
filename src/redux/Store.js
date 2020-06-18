import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import AppReducers from "./Reducers";
import allSagas from "./Sagas/root";

const middleWares = [];

/* eslint-disable */
if (1) {
  middleWares.push(logger);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  middleWares.push(sagaMiddleware);

  const allMiddleWares = compose(applyMiddleware(...middleWares));
  const store = createStore(AppReducers, allMiddleWares);

  //Running all Worker Sagas
  sagaMiddleware.run(allSagas);

  return { store };
};

export default configureStore;
