import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {

  handleClick = () =>{
    const { dispatch } = this.props;
    if(this.props.selectedKeg != null){
      const action = a.deselect();
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddNewKeg = (newKeg) =>{
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleKegInView = (id) => {
    const { dispatch } = this.props;
    const action = a.selectKeg(id);
    dispatch(action);
  }

  handleRestock = () => {
    const { dispatch } = this.props;
    const kegId = this.props.selectedKeg;
    const keg = this.props.kegMenu[kegId];
    const oneMoreKeg = (keg.untappedKegs + 1);
    const action = a.addKeg({...keg, untappedKegs: oneMoreKeg});
    dispatch(action);
  }

  handleBuy = () => {
    const { dispatch } = this.props;
    const kegId = this.props.selectedKeg;
    const keg = this.props.kegMenu[kegId];
    const oneLessPint = keg.pintsRemaining - 1
    const action = a.addKeg({...keg, pintsRemaining: oneLessPint});
    dispatch(action);
  }

  handleTapNewKeg = () => {
    const { dispatch } = this.props;
    const kegId = this.props.selectedKeg;
    const keg = this.props.kegMenu[kegId];
    const tappedKeg = (keg.untappedKegs - 1);
    const action = a.addKeg({...keg, untappedKegs: tappedKeg, pintsRemaining: 124})
    dispatch(action);
  }

  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.props.selectedKeg != null){
      const selectedKeg = this.props.kegMenu[this.props.selectedKeg];
      visibleNow =
      <KegSpecs
        keg={selectedKeg}
        onRestock={this.handleRestock}
        onBuy={this.handleBuy}
        onTapNewKeg={this.handleTapNewKeg}
      />
      buttonText="Booch Menu"
    } else if (!this.props.formView){
      visibleNow =
      <KegMenu
        kegMenu={this.props.kegMenu}
        onKegSelection={this.handleKegInView}
      />
      buttonText="+ new Booch"
    } else {
      visibleNow =
      <NewKeg
        onNewKeg={this.handleAddNewKeg}
      />
      buttonText="Booch Menu"
    }

    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        <hr/>
        {visibleNow}
      </React.Fragment>
    );
  }
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

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;