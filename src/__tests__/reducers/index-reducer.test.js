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

  test('Check that initial stat of formViewReducer matches root reducer', () => {
    expect(store.getState().formView).toEqual(formViewReducer(undefined, {type: null}));
  });
});