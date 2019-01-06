import React, { Component } from 'react';
import BoxList from 'components/boxsim/BoxList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxListContainer extends Component {

  getBoxList() {
    const {BoxSimulActions, boxs} = this.props;
    if(boxs.length === 0) BoxSimulActions.getBoxList();
  }

  componentDidMount() {
    this.getBoxList();
  }

  boxInfoList = (packageCode) => {
    console.log("packageCode : " + packageCode);
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
}

export default connect(
  (state) => ({
    boxs: state.boxsim.toJS().boxs,
    currBox: state.boxsim.toJS().currBox
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxListContainer);