import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInView: true,
      masterKegMenu: [],
      kegInView: null
    };
  }

  handleClick = () =>{
    if(this.state.kegInView != null){
      this.setState({
        formInView: false,
        kegInView: null
      });
    } else {
      this.setState(prevState => ({
        formInView: !prevState.formInView}));
    }
  }

  handleAddNewKeg = (newKeg) =>{
    const newMasterKegMenu = this.state.masterKegMenu.concat(newKeg);
    this.setState({masterKegMenu: newMasterKegMenu,
                  formInView: false});
  }

  handleKegInView = (id) => {
    const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id)[0];
    this.setState({kegInView: selectedKeg});
  }

  handleRestock = () => {
    const untappedKegs = this.state.kegInView.untappedKegs;
    const restockedKeg = {...this.state.kegInView, untappedKegs:(untappedKegs + 1)};
    const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(restockedKeg);
    this.setState({kegInView: restockedKeg,
                  masterKegMenu: newMasterKegMenu});
  }

  handleBuy = () => {
    const pintsRemaining = this.state.kegInView.pintsRemaining;
    const updatedKeg = {...this.state.kegInView, pintsRemaining:(pintsRemaining - 1)};
    const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(updatedKeg);
    this.setState({kegInView: updatedKeg,
                  masterKegMenu: newMasterKegMenu});
  }

  handleTapNewKeg = () => {
    const backupKegs = this.state.kegInView.untappedKegs;
    const pints = this.state.kegInView.pintsRemaining;
    if (backupKegs > 0 && pints === 0){
      const updatedKeg = {...this.state.kegInView, pintsRemaining:(124), untappedKegs: (backupKegs - 1)};
      const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(updatedKeg);
      this.setState({kegInView: updatedKeg,
                    masterKegMenu: newMasterKegMenu});
    } else {
      alert("You cannot tap a keg if you have pints left or if you have no keg to replace it. ");
    }
  }

  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.state.kegInView != null){
      visibleNow = <KegSpecs keg={this.state.kegInView} onRestock={this.handleRestock} onBuy={this.handleBuy} onTapNewKeg={this.handleTapNewKeg}/>
      buttonText="Booch Menu"
    } else if (!this.state.formInView){
      visibleNow = <KegMenu kegMenu={this.state.masterKegMenu} onKegSelection={this.handleKegInView}/>
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

export default KegControl;