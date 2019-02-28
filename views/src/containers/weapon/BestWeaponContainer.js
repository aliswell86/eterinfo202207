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
    return nextProps.bestItems.day.info.length === 20 && (nextProps.bestItems.day.info[0].item_nm !== this.props.bestItems.day.info[0].item_nm);
  }

  render() {
    const {bestItems} = this.props;
    
    return (
      <BestWeapon bestItems={bestItems}/>
    );
  }
}

export default connect(
  (state) => ({
    bestItems: state.weapon.toJS().bestItems,
    weapons: state.weapon.get('weapons')
  }),
  (dispatch) => ({
    WeaponActions: bindActionCreators(weaponActions, dispatch)
  })
)(BestWeaponContainer);