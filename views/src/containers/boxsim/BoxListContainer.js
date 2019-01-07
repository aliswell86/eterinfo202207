import React, { Component } from 'react';
import BoxList from 'components/boxsim/BoxList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxListContainer extends Component {

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({});
  }

  getBoxList() {
    const {BoxSimulActions, boxs} = this.props;
    if(boxs.length === 0) BoxSimulActions.getBoxList();
  }

  componentDidMount() {
    this.getBoxList();
  }

  boxInfoList = (packageCode) => {
    const {BoxSimulActions, currBox} = this.props;
    if(currBox.packageCode !== packageCode) BoxSimulActions.setCurrBox(packageCode);
  }

  render() {
    const {boxs, currBox} = this.props;
    const {boxInfoList} = this;
    const currCode = currBox.packageCode;
    
    return (
      <BoxList boxs={boxs} boxInfoList={boxInfoList} currCode={currCode}/>
    );
  }

  componentDidUpdate() {
    const {currBox, loading} = this.props;

    if(this.isEmpty(currBox) && !loading) {
      this.boxInfoList('6'); // EP박스
    }
  }
}

export default connect(
  (state) => ({
    boxs: state.boxsim.toJS().boxs,
    currBox: state.boxsim.toJS().currBox,
    loading: state.pender.pending['boxsim/GET_BOXLIST']
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxListContainer);