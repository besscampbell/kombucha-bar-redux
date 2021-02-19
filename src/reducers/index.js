import formViewReducer from './form-view-reducer';
import kegMenuReducer from './keg-menu-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formView: formViewReducer,
  selectedKeg: selectedKegReducer,
  kegMenu: kegMenuReducer,
});

export default rootReducer;