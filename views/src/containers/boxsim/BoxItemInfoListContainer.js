import React, { Component } from 'react';
import BoxItemInfoList from 'components/boxsim/BoxItemInfoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxItemInfoListContainer extends Component {

  boxGet = (boxCnt) => {
    const {BoxSimulActions, currBox} = this.props;
    const {itemInfo} = currBox;

    for(let i=0; i<boxCnt; i++) {
      const random = Math.floor(Math.random() * 10000) + 1;

      for(let j=0; j<itemInfo.length; j++) {
        // if(random >= 1 && random <= 5) {
        // 머리좀 써야할듯..
        // }
      }
    }

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