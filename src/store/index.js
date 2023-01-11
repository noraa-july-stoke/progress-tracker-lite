import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import reports from '../data/initial-reports.json';

const logger = require("redux-logger").default;
const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

//------------------------------------------------

const initialState = {};
reports.forEach((report) => {
  initialState[report.id] = {...report}
});
//------------------------------------------------
const DELETE = 'DELETE';
const ADD = 'ADD';
const RESET = 'RESET';

export const deleteReport = (id) => {
  return ({
    type: DELETE,
    id
})};

export const addReport = (body) => {
  return ({
    type: ADD,
    body
})};

export const resetReports = () => {
  return({
    type: RESET
  });
}


const reportsReducer = (state = initialState, action) => {

  const newState = {...state};
  Object.keys(state).forEach((key) => {
    newState[key] = {...newState[key]
  }});

  switch(action.type) {

    case(DELETE):
      delete newState[action.id];
      return newState;

    case(ADD):
      newState[action.body.id] = {...action.body}
      return newState;

    case(RESET):
      return initialState;

    default:
      return state;
}};

//------------------------------------------------
const rootReducer = combineReducers({
  reports: reportsReducer
});

//------------------------------------------------
//------------------------------------------------


export const configureStore = ( preLoadedState ) => {
  return createStore(rootReducer, preLoadedState, enhancer)
};

export default configureStore;
