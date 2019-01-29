import React, { Component } from 'react';
import BoxResult from 'components/boxsim/BoxResult';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxResultContainer extends Component {

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

  initialBoxResultList = () => {
    const {BoxSimulActions} = this.props;
    BoxSimulActions.initialBoxResultList();
  }

  boxInfoListDisplay = () => {
    const {BoxSimulActions} = this.props;
    BoxSimulActions.setBoxInfoListDisplay();
  }

  boxResultSearch = (id) => {
    const {BoxSimulActions, boxResultList} = this.props;
    if(boxResultList.length > 0) {
      BoxSimulActions.getBoxResultListWhere(id);
    }
  }

  render() {
    const {currBox, boxResultList} = this.props;
    const {boxGet, initialBoxResultList, boxInfoListDisplay, boxResultSearch} = this;

    return (
      <BoxResult
      currBox={currBox}
      boxGet={boxGet}
      initialBoxResultList={initialBoxResultList}
      boxInfoListDisplay={boxInfoListDisplay}
      boxResultSearch={boxResultSearch}
      boxCnt={boxResultList.length}/>
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
)(BoxResultContainer);