import formViewReducer from '../../reducers/form-view-reducer';
import * as c from './../../actions/ActionTypes';

const currentState = true

describe('formViewReducer', () => {
  test('Should return default state if no action is passed in', () => {
    expect(formViewReducer(true, {type: null})).toEqual(true);
  });

  test('Should correctly toggle boolean',  () => {
    let action = {
      type: c.TOGGLE_FORM
    }
    expect(formViewReducer(currentState, action)).toEqual(false);
  });
});
