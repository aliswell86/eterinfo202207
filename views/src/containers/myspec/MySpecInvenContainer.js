import React, { Component } from 'react';
import MySpecInven from 'components/myspec/MySpecInven';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';
import * as weaponActions from 'store/modules/weapon';

class MySpecInvenContainer extends Component {

  handleChangeNum = (e) => {
    const {MySpecActions, itemInfo} = this.props;
    const {dmg, cri, stype1} = itemInfo;
    const {name, value} = e.target;
    
    if(Number(value) > -1 && Number(value) < 501) {
      MySpecActions.setMyStat({name, value});
    }
    
    MySpecActions.getInvenDmage({dmg, cri, stype1});
  }

  handleChangeCheck = (e) => {
    const {MySpecActions, itemInfo} = this.props;
    const {dmg, cri, stype1} = itemInfo;
    const {name, value, checked} = e.target;

    if(name === 'isParasite') {
      MySpecActions.setMyStat({name, checked});
    }else{
      MySpecActions.setMyStat({name, value});
    }

    MySpecActions.getInvenDmage({dmg, cri, stype1});
  }

  handleClick = (e) => {
    e.target.select();
  }

  render() {
    const {handleChangeNum, handleChangeCheck, handleClick} = this;
    const {myStat} = this.props;
    return (
      <MySpecInven
        myStatInsert={handleChangeNum}
        myStat={myStat}
        setParaDoping={handleChangeCheck}
        inputClick={handleClick}/>
    );
  }
}

export default connect(
  (state) => ({
    myStat: state.myspec.toJS().myStat,
    itemInfo: state.weapon.toJS().weaponView.itemInfo
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch),
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(MySpecInvenContainer);