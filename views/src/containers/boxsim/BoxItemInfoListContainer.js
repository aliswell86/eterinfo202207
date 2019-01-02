import React, { Component } from 'react';
import BoxItemInfoList from 'components/boxsim/BoxItemInfoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxItemInfoListContainer extends Component {

  boxGet = (boxCnt) => {
    const {BoxSimulActions, currBox} = this.props;
    const {itemInfo} = currBox;
    // const random = Math.floor(Math.random() * 10000) + 1;
    const luckValue = [];

    for(let i=0; i<itemInfo.length; i++) {
      luckValue.push(itemInfo[i].luck);
      itemInfo.luckValue = luckValue;
    }
    console.log(luckValue);
    console.log(itemInfo);

    // BoxSimulActions.getBoxOpenResult(boxCnt);
  }

  render() {
    const {currBox} = this.props;
    const {boxGet} = this;

    return (
      <BoxItemInfoList currBox={currBox} boxGet={boxGet}/>
    );
  }
}

export default connect(
  (state) => ({
    currBox: state.boxsim.toJS().currBox
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxItemInfoListContainer);