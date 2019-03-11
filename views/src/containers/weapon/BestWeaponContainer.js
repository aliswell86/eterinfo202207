import React, { Component } from 'react';
import BestWeapon from 'components/weapon/BestWeapon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from 'store/modules/weapon';

class BestWeaponContainer extends Component {

  getBestItem = async() => {
    const {WeaponActions} = this.props;
    try {
      await WeaponActions.getBestItem();
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getBestItem();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const yn = nextProps.bestWeaponPop.weaponId !== this.props.bestWeaponPop.weaponId;
    return yn || nextProps.bestItems.day.info.length === 20 && (nextProps.bestItems.day.info[0].item_nm !== this.props.bestItems.day.info[0].item_nm);
    // return true;
  }

  bestWeaponHistView = (e) => {
    const left = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    const top = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    const weaponId = e.target.getAttribute('weapon_id');
    const period = e.target.getAttribute('period');
    
    if(weaponId !== null && weaponId !== '' && weaponId !== undefined) {
      const {WeaponActions, bestWeaponPop} = this.props;

      if(weaponId !== bestWeaponPop.weaponId) {
        WeaponActions.bestWeaponHist({top, left, weaponId, period});
      }
    }
  }

  render() {
    const {bestItems, bestWeaponPop} = this.props;
    const {bestWeaponHistView} = this;
    
    return (
      <BestWeapon
      bestItems={bestItems}
      bestWeaponHistView={bestWeaponHistView}
      bestWeaponPop={bestWeaponPop}
      />
    );
  }
}

export default connect(
  (state) => ({
    bestItems: state.weapon.toJS().bestItems,
    weapons: state.weapon.get('weapons'),
    bestWeaponPop: state.weapon.toJS().bestWeaponPop,
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(BestWeaponContainer);