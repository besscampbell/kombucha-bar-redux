import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formViewReducer from '../../reducers/form-view-reducer';
import kegMenuReducer from '../../reducers/keg-menu-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      formView: true,
      selectedKeg: null,
      kegMenu: {},
    });
  });

  test('Check that initial state of formViewReducer matches root reducer', () => {
    expect(store.getState().formView).toEqual(formViewReducer(true, {type: null}));
  });

  test('Check that initial state of kegMenuReducer matches root reducer', () => {
    expect(store.getState().kegMenu).toEqual(kegMenuReducer({}, {type: null}));
  });
});