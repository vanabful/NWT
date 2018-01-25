import {combineReducers} from 'redux';
import animals from './animals';

let reducers = {
    animals
  };
  
  const rootReducer = combineReducers(reducers);

export default rootReducer;

