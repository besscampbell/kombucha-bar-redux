import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('kombucha bar actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({brand: 'Synergy', flavor: 'Trilogy', pricePerPint: 2.75, kegPrice: 270.00, untappedKegs: 1, pintsRemaining: 34, id: 1})).toEqual({
      type: c.ADD_KEG,
      brand: 'Synergy',
      flavor: 'Trilogy',
      pricePerPint: 2.75,
      kegPrice: 270.00,
      untappedKegs: 1,
      pintsRemaining: 34,
      id: 1
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg(2)).toEqual({
      type: c.SELECT_KEG,
      id: 2,
    });
  });

  it('deselect should create DESELECT action', () => {
    expect(actions.deselect()).toEqual({
      type: c.DESELECT,
    });
  });
});