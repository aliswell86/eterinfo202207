import React, { Component } from 'react';
import ArmmorWhereBox from 'components/wherebox/ArmmorWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as armmorActions from 'store/modules/armmor';

class ArmmorWhereBoxContainer extends Component {

  getArmmorList = async() => {
    const {ArmomrActions/*, weaponWhere*/} = this.props;
    try {
      await ArmomrActions.getArmmorList();
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {armmors} = this.props;
    console.log(armmors);
    if(!armmors.size > 0) this.getArmmorList();
  }

  render() {
    return (
      <ArmmorWhereBox/>
    );
  }
}

export default connect(
  (state) => ({
    // weaponWhere: state.weapon.toJS().weaponWhere,
    armmors: state.armmor.get('armmors')
    // loading: state.pender.pending['weapon/GET_WEAPON_LIST']
  }),
  (dispatch) => ({
    ArmmorActions: bindActionCreators(armmorActions, dispatch)
  })
)(ArmmorWhereBoxContainer);