import React, { Component } from 'react';
import MyInfoView from 'components/myspec/MyInfoView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';
import * as weaponActions from 'store/modules/weapon';

class MyInfoViewContainer extends Component {
  render() {
    const {myStat, itemInfo} = this.props;

    return (
      <MyInfoView
        myStat={myStat}
        itemInfo={itemInfo}/>
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
)(MyInfoViewContainer);