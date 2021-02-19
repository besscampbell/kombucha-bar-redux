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

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(null, {type: null}));
  });

  test("Check that ADD_KEG action works for kegMenuReducer and rootReducer", () => {
    const action = {
      type: 'ADD_KEG',
      brand: 'Brew Dr.',
      flavor: 'Uplift',
      pricePerPint: 3.50,
      kegPrice: 270.00,
      untappedKegs: 1,
      pintsRemaining: 12,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().kegMenu).toEqual(kegMenuReducer({}, action));
  });

  test('Check that TOGGLE_FORM action works for formViewReducer and rootReducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formView).toEqual(formViewReducer(true, action));
  });
});