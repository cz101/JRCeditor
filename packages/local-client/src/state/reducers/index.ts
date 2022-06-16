import { combineReducers } from 'redux';
import cellsReducer from './cellreducer';
import bundleReducer from './bundlesReducer'

const reducers = combineReducers({
  cells: cellsReducer,
  bundlecells :bundleReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
