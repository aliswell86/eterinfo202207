import React, { Component } from 'react';
import BoxItemInfoList from 'components/boxsim/BoxItemInfoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxItemInfoListContainer extends Component {

  boxGet = (boxCnt) => {
    const {BoxSimulActions, currBox} = this.props;
    const {itemInfo} = currBox;
    const boxResultList = [];

    for(let i=0; i<boxCnt; i++) {
      const random = Math.floor(Math.random() * 10000) + 1;
      const boxResult = itemInfo.filter(item => {
        const {min, max} = item.luck;      
        return (
          random >= min && random <= max
        );
      });

      boxResultList.push(boxResult[0]);
    }

    BoxSimulActions.getBoxOpenResult(boxResultList);
  }

  render() {
    const {currBox, boxResultList} = this.props;
    const {boxGet} = this;

    return (
      <BoxItemInfoList currBox={currBox} boxGet={boxGet} boxResultList={boxResultList}/>
    );
  }
}

export default connect(
  (state) => ({
    currBox: state.boxsim.toJS().currBox,
    boxResultList: state.boxsim.toJS().boxResultList
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxItemInfoListContainer);