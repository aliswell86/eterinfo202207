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
  
  boxInfoListDisplay = () => {
    const {BoxSimulActions} = this.props;
    BoxSimulActions.setBoxInfoListDisplay();
  }

  initialBoxResultList = () => {
    const {BoxSimulActions} = this.props;
    BoxSimulActions.initialBoxResultList();
  }

  boxResultSearch = (id) => {
    const {BoxSimulActions, boxResultList} = this.props;
    if(boxResultList.length > 0) {
      BoxSimulActions.getBoxResultListWhere(id);
    }
  }

  render() {
    const {currBox, boxResultListWhere, boxResultList} = this.props;
    const {boxGet, boxInfoListDisplay, initialBoxResultList, boxResultSearch} = this;

    return (
      <BoxItemInfoList
        currBox={currBox}
        boxGet={boxGet}
        boxResultListWhere={boxResultListWhere}
        boxInfoListDisplay={boxInfoListDisplay}
        initialBoxResultList={initialBoxResultList}
        boxResultSearch={boxResultSearch}
        boxCnt={boxResultList.length}/>
    );
  }
}

export default connect(
  (state) => ({
    currBox: state.boxsim.toJS().currBox,
    boxResultList: state.boxsim.toJS().boxResultList,
    boxResultListWhere: state.boxsim.toJS().boxResultListWhere
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxItemInfoListContainer);