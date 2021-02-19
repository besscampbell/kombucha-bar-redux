import kegMenuReducer from '../../reducers/keg-menu-reducer';

describe('kegMenuReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegMenuReducer({}, {type: null})).toEqual({});
  });
});