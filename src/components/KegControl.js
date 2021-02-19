import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  handleClick = () =>{
    const { dispatch } = this.props;
    if(this.props.selectedKeg != null){
      const action = {
        type: 'DESELECT'
      }
      dispatch(action);
      // this.setState({
      //   formInView: false,
      //   kegInView: null
      // });
    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddNewKeg = (newKeg) =>{
    const { dispatch } = this.props;
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      brand,
      flavor,
      pricePerPint,
      kegPrice,
      untappedKegs,
      pintsRemaining,
      id,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
    // const newMasterKegMenu = this.props.kegMenu.concat(newKeg);
    // this.setState({masterKegMenu: newMasterKegMenu,
                  // formInView: false});
  }

  handleKegInView = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'SELECT_KEG',
      id,
      kegMenu: this.props.kegMenu
    }
    dispatch(action);
    // const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id)[0];
    // this.setState({kegInView: selectedKeg});
  }

  handleRestock = () => {
    // const untappedKegs = this.props.selectedKeg.untappedKegs;
    // const restockedKeg = {...this.props.selectedKeg, untappedKegs:(untappedKegs + 1)};
    const { dispatch } = this.props;
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = this.props.selectedKeg;
    const action = {
      type: 'ADD_KEG',
      brand,
      flavor,
      pricePerPint,
      kegPrice,
      untappedKegs: (untappedKegs + 1),
      pintsRemaining,
      id,
    }
    dispatch(action);
        // const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(restockedKeg);
    // this.setState({kegInView: restockedKeg,
                  // masterKegMenu: newMasterKegMenu});
  }

  handleBuy = () => {
    // const pintsRemaining = this.props.selectedKeg.pintsRemaining;
    // const updatedKeg = {...this.props.selectedKeg, pintsRemaining:(pintsRemaining - 1)};
    const { dispatch } = this.props;
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, pintsRemaining, id } = this.props.selectedKeg;
    const action = {
      type: 'ADD_KEG',
      brand,
      flavor,
      pricePerPint,
      kegPrice,
      untappedKegs,
      pintsRemaining: (pintsRemaining - 1),
      id,
    }
    dispatch(action);
    // const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(updatedKeg);
    // this.setState({kegInView: updatedKeg,
                  // masterKegMenu: newMasterKegMenu});
  }

  handleTapNewKeg = () => {
    // const backupKegs = this.props.selectedKeg.untappedKegs;
    // const pints = this.props.selectedKeg.pintsRemaining;
    // if (backupKegs > 0 && pints === 0){
      // const updatedKeg = {...this.state.kegInView, pintsRemaining:(124), untappedKegs: (backupKegs - 1)};
      // const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(updatedKeg);
      // this.setState({kegInView: updatedKeg,
      //               masterKegMenu: newMasterKegMenu});
    // } else {
    //   alert("You cannot tap a keg if you have pints left or if you have no keg to replace it. ");
    // }
    const { dispatch } = this.props;
    const { brand, flavor, pricePerPint, kegPrice, untappedKegs, id } = this.props.selectedKeg;
    const action = {
      type: 'ADD_KEG',
      brand,
      flavor,
      pricePerPint,
      kegPrice,
      untappedKegs: (untappedKegs - 1),
      pintsRemaining: 124,
      id,
    }
    dispatch(action);
  }

  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.props.selectedKeg != null){
      visibleNow = <KegSpecs keg={this.props.selectedKeg} onRestock={this.handleRestock} onBuy={this.handleBuy} onTapNewKeg={this.handleTapNewKeg}/>
      buttonText="Booch Menu"
    } else if (!this.props.formView){
      visibleNow = <KegMenu kegMenu={this.props.kegMenu} onKegSelection={this.handleKegInView}/>
      buttonText="+ new Booch"
    } else {
      visibleNow = <NewKeg onNewKeg={this.handleAddNewKeg}/>
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
  selectedKeg: PropTypes.object,
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