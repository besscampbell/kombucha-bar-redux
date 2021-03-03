import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

function KegControl(props) {

  const handleClick = () =>{
    const { dispatch } = props;
    if(props.selectedKeg != null){
      const action = a.deselect();
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  const handleAddNewKeg = (newKeg) => {
    const { dispatch } = props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  const handleDeleteKeg = (id) => {
    const { dispatch } = props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselect();
    dispatch(action2);
  }

  const handleKegInView = (id) => {
    const { dispatch } = props;
    const action = a.selectKeg(id);
    dispatch(action);
  }

  const handleRestock = () => {
    const { dispatch } = props;
    const kegId = props.selectedKeg;
    const keg = props.kegMenu[kegId];
    const oneMoreKeg = (keg.untappedKegs + 1);
    const action = a.addKeg({...keg, untappedKegs: oneMoreKeg});
    dispatch(action);
  }

  const handleBuy = () => {
    const { dispatch } = props;
    const kegId = props.selectedKeg;
    const keg = props.kegMenu[kegId];
    const oneLessPint = keg.pintsRemaining - 1
    const action = a.addKeg({...keg, pintsRemaining: oneLessPint});
    dispatch(action);
  }

  const handleTapNewKeg = () => {
    const { dispatch } = props;
    const kegId = props.selectedKeg;
    const keg = props.kegMenu[kegId];
    const tappedKeg = (keg.untappedKegs - 1);
    const action = a.addKeg({...keg, untappedKegs: tappedKeg, pintsRemaining: 124})
    dispatch(action);
  }

  // {
    let visibleNow = null;
    let buttonText = null;
    if(props.selectedKeg != null){
      const selectedKeg = props.kegMenu[props.selectedKeg];
      visibleNow =
      <KegSpecs
        keg={selectedKeg}
        onRestock={handleRestock}
        onBuy={handleBuy}
        onTapNewKeg={handleTapNewKeg}
        onDelete={handleDeleteKeg}
      />
      buttonText="Booch Menu"
    } else if (!props.formView){
      visibleNow =
      <KegMenu
        kegMenu={props.kegMenu}
        onKegSelection={handleKegInView}
      />
      buttonText="+ new Booch"
    } else {
      visibleNow =
      <NewKeg
        onNewKeg={handleAddNewKeg}
      />
      buttonText="Booch Menu"
    }

    return(
      <React.Fragment>
        <button onClick={handleClick}>{buttonText}</button>
        <hr/>
        {visibleNow}
      </React.Fragment>
    );
  // }
}

KegControl.propTypes = {
  selectedKeg: PropTypes.string,
  formView: PropTypes.bool,
  kegMenu: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    selectedKeg: state.selectedKeg,
    formView: state.formView,
    kegMenu: state.kegMenu,
  }
}

export default connect(mapStateToProps)(KegControl);